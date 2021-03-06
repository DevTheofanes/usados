import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import {
  Container,
  SearchSpace,
  SearchHeader,
  SearchBorder,
  SearchGrid,
  SearchItem,
  InfoContent,
  InfoContentTitle,
  InfoContentDuoImages,
  InfoContentUnicImage,
  SearchItemImage,
} from './styles';

import { HeaderComponent } from '../../components/Header';

import SecureBanner from '../../assets/banners/secureBanner.png';
import OficialBanner from '../../assets/banners/oficialBanner.png';
import CommentsBanner from '../../assets/banners/commentsBanner.png';
import { FooterComponent } from '../../components/Footer';
import api from '../../services/api';
import { useUser } from '../../hooks/useUser';

export function Home() {
  const [classifieds, setClassifieds] = useState([]);
  const { host } = useUser();

  useEffect(() => {
    async function loadClassifieds() {
      try {
        const response = await api.get('/classifieds');
        setClassifieds(response.data.slice(0, 8));
      } catch (error) {
        toast.warn('Algo deu errado, tente novamente mais tarde.');
        console.log(error.response.data);
      }
    }

    loadClassifieds();
  }, []);

  return (
    <Container>
      <HeaderComponent height="16rem" />

      <SearchSpace>
        <SearchHeader>
          <strong>O que você procura hoje?</strong>
        </SearchHeader>

        <SearchGrid>
          {
            classifieds.map((classified) => (
              <SearchItem href={`/classificado/${classified.id}`}>
                <SearchItemImage>
                  <img src={`${host}/files/${classified.mainImage}`} alt={classified.title} />
                </SearchItemImage>
                <strong>{classified.title}</strong>
                <SearchBorder />
                <span>{classified.description}</span>
                <span>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(classified.value)
                  }
                </span>
              </SearchItem>
            ))
          }
        </SearchGrid>
      </SearchSpace>

      <InfoContent href="/sobre">
        <InfoContentTitle>
          <strong>Sobre a usados novo</strong>
        </InfoContentTitle>

        <InfoContentDuoImages>
          <img src={SecureBanner} alt="Banner" />
          <img src={OficialBanner} alt="Banner" />
        </InfoContentDuoImages>

        <InfoContentUnicImage src={CommentsBanner} alt="Banner" />
      </InfoContent>

      <FooterComponent />
    </Container>
  );
}
