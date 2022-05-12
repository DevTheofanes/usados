/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import {
  // AiOutlineHeart,
  AiOutlineArrowLeft,
  // AiOutlineArrowRight,
} from 'react-icons/ai';
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
  ShopInfos,
  // ContentHeaderButton,
  // ContentHeaderButtonContainer,
  // ContentHeaderLinks,
  // ContentHeaderLinksShopkeeper,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
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
      <HeaderLoggedComponent />

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
              <ClassifiedShop>
                <img
                  src={
                    classified.shop
                      ? `${host}/files/${classified.shop.profileUrl}`
                      : ''
                  }
                />
                <ShopInfos>
                  <strong>{classified.shop ? classified.shop.name : ''}</strong>
                  <span>{classified.shop ? classified.shop.slogan : ''}</span>
                </ShopInfos>
              </ClassifiedShop>
            </ClassifiedsContentInfos>
          </Classified>
        </ContentClassified>
      </Content>

      <FooterComponent />
    </Container>
  );
}
