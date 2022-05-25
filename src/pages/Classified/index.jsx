/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import {
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  Classified,
  ClassifiedHeader,
  ClassifiedHeaderSubtitle,
  ClassifiedHeaderTitle,
  ClassifiedsContentInfos,
  ClassifiedShop,
  Container,
  Content,
  ContentClassified,
  ContentHeader,
  ContentHeaderBack,
  ProfileLink,
  ShopInfos,
  WhatsappLink,
  // ContentHeaderButton,
  // ContentHeaderButtonContainer,
  // ContentHeaderLinks,
  // ContentHeaderLinksShopkeeper,
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { useUser } from '../../hooks/useUser';
import api from '../../services/api';
import { Carousel } from '../../components/Carousel';

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
      <HeaderComponent showIconsBar={false} />

      <Content>
        <ContentHeader>
          <ContentHeaderBack href="/classificados">
            <AiOutlineArrowLeft size={14} color="#888" />
            Voltar para classificados
          </ContentHeaderBack>
        </ContentHeader>

        <ContentClassified>
          <ClassifiedHeader>
            <ClassifiedHeaderTitle>{classified.title}</ClassifiedHeaderTitle>
            <ClassifiedHeaderSubtitle>
              {classified.messageCreated}
            </ClassifiedHeaderSubtitle>
          </ClassifiedHeader>
          <Classified>
            <Carousel images={classified.files} />
            <ClassifiedsContentInfos>
              <ClassifiedShop href={`/perfil/lojista/${classified.profileShop}`}>
                <img
                  src={
                    classified.shop
                      ? `${host}/files/${classified.shop.profileUrl}`
                      : ''
                  }
                />
                <ShopInfos>
                  <div>
                    <strong>
                      {classified.shop ? classified.shop.name : ''}
                    </strong>
                    <span>{classified.shop ? classified.shop.slogan : ''}</span>
                  </div>

                  <small>
                    <BsStarFill size={12} />
                    {classified.shop ? `${classified.shop.rating.split('')[0]}.0` : '0.0'}
                  </small>
                </ShopInfos>
              </ClassifiedShop>

              <h4>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(classified.value)}
              </h4>

              <h5>Detalhes sobre o Classificado</h5>
              <p>{classified.description}</p>

              <h5>Método de pagamento</h5>
              <p>{classified.methodPay}</p>

              <h5>Localização</h5>
              <p>{classified.city}</p>

              <h5>Mais Informações</h5>
              {classified.isPix ? (<p>- Aceita Pix</p>) : null}
              {classified.isDelivered ? (<p>- Realiza Entrega</p>) : null}
              {classified.isNew ? (<p>- Produto Novo</p>) : (<p>- Produto SemiNovo</p>)}

              <WhatsappLink
                target="_blank"
                href={
              classified.shop
                ? `https://api.whatsapp.com/send?phone=55${classified.shop.whatsapp}&text=Olá ${classified.shop.name}, encontrei seu produto ${classified.title} na NovosUsados.com, ele ainda está disponivel?`
                : null
              }
              >
                <IoLogoWhatsapp color="#008D36" size={20} />
                Entrar em contato via Whatsapp
              </WhatsappLink>

              <ProfileLink>
                <a href={`/perfil/lojista/${classified.profileShop}`}>Visualizar Perfil do Lojista</a>
              </ProfileLink>
            </ClassifiedsContentInfos>
          </Classified>
        </ContentClassified>
      </Content>

      <FooterComponent />
    </Container>
  );
}
