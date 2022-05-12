/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import {
  AiOutlineHeart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
// import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import {
  CarouselButton,
  Classified,
  ClassifiedPaymentContent,
  ClassifiedPaymentWhatsapp,
  ClassifiedsContentDescription,
  ClassifiedsContentFooter,
  ClassifiedsContentIcon,
  ClassifiedsContentInfoLine,
  ClassifiedsContentInfos,
  Container,
  Content,
  ContentClassified,
  ContentClassifiedImage,
  ContentClassifiedPayment,
  ContentHeader,
  ContentHeaderBack,
  ContentHeaderButton,
  ContentHeaderButtonContainer,
  ContentHeaderLinks,
  ContentHeaderLinksShopkeeper,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';
import { useUser } from '../../hooks/useUser';
import api from '../../services/api';

export function ClassifiedPage() {
  const { id } = useParams();
  const { host } = useUser();
  const [classified, setClassified] = useState({});

  useEffect(() => {
    async function loadClassified() {
      try {
        const response = await api.get(`/classified/${id}`);
        setClassified(response.data);
      } catch (error) {
        toast.warn(error.response.data.error);
        console.log(error.response.data);
      }
    }

    loadClassified();
  }, [id]);

  return (
    <Container>
      <HeaderLoggedComponent />

      <Content>
        <ContentHeader>
          <ContentHeaderLinks>
            <ContentHeaderBack>
              <AiOutlineArrowLeft size={14} color="#888" />
              <a href="/classificados">Voltar para classificados</a>
            </ContentHeaderBack>
            <ContentHeaderLinksShopkeeper>
              <a href={`/perfil/lojista/${classified.profileShop}`}>
                Perfil do Vendedor
              </a>
              <IoIosArrowForward size={14} color="#888" />
              <a href={`/perfil/lojista/${classified.profileShop}/avaliacoes`}>
                Avaliações do Vendedor
              </a>
            </ContentHeaderLinksShopkeeper>
          </ContentHeaderLinks>

          <ContentHeaderButtonContainer>
            <ContentHeaderButton
              href={`/perfil/lojista/${classified.profileShop}`}
            >
              Ver mais anuncios dessa loja
              <AiOutlineArrowRight size={14} color="#fff" />
            </ContentHeaderButton>
          </ContentHeaderButtonContainer>
        </ContentHeader>

        <ContentClassified>
          <Classified>
            <Carousel
              showArrows
              infiniteLoop
              centerSlidePercentage
              emulateTouch
              onChange={() => {}}
              onClickItem={() => {}}
              renderArrowPrev={(clickHandler) => (
                <CarouselButton onClick={clickHandler}>
                  <AiOutlineArrowLeft size={24} />
                </CarouselButton>
              )}
              renderArrowNext={(clickHandler) => (
                <CarouselButton onClick={clickHandler} style={{ right: 0 }}>
                  <AiOutlineArrowRight size={24} />
                </CarouselButton>
              )}
              renderThumbs={() => {}}
              statusFormatter={(selected, total) => `${selected} de ${total}`}
            >
              {classified.files ? (
                classified.files.map((file) => (
                  <ContentClassifiedImage key={file.filename}>
                    <div url={`${host}/files/${file.filename}`} />
                    <img src={`${host}/files/${file.filename}`} />
                  </ContentClassifiedImage>
                ))
              ) : (
                <div />
              )}
            </Carousel>
            <ClassifiedsContentInfos>
              <ClassifiedsContentIcon>
                <AiOutlineHeart color="#888" />
              </ClassifiedsContentIcon>

              <ClassifiedsContentInfoLine>
                <h1>
                  {classified.title}
                  <br />
                  Lojista
                  {' '}
                  {classified.shop ? classified.shop.name : null}
                </h1>

                <strong>
                  Hoje
                  <br />
                  14h20
                </strong>
              </ClassifiedsContentInfoLine>

              <ClassifiedsContentDescription>
                {classified.description}
              </ClassifiedsContentDescription>

              <ClassifiedsContentFooter>
                <span>
                  Avaliações
                  <br />
                  <strong>
                    {classified.shop ? classified.shop.ratings : null}
                  </strong>
                </span>

                <span>
                  Localização
                  <br />
                  <strong>
                    {classified.shop ? classified.shop.address : null}
                  </strong>
                </span>
              </ClassifiedsContentFooter>

              <ContentClassifiedPayment>
                <ClassifiedPaymentContent>
                  <strong>Valor</strong>
                  <h2>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(classified.value)}
                  </h2>
                  <span>{classified.methodPay}</span>
                </ClassifiedPaymentContent>

                <ClassifiedPaymentWhatsapp
                  target="_blank"
                  href={
                  classified.shop
                    ? `https://api.whatsapp.com/send?phone=55${classified.shop.whatsapp}&text=Olá ${classified.shop.name}, encontrei seu produto ${classified.title} na NovosUsados.com, ele ainda está disponivel?`
                    : null
                }
                >
                  Whatsapp
                </ClassifiedPaymentWhatsapp>
              </ContentClassifiedPayment>
            </ClassifiedsContentInfos>
          </Classified>
        </ContentClassified>
      </Content>

      <FooterComponent />
    </Container>
  );
}
