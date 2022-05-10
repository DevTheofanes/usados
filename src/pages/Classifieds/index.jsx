/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';

import {
  ClassifiedsBox,
  ClassifiedsContent,
  ClassifiedsContentIcon,
  ClassifiedsContentImage,
  ClassifiedsContentInfoLine,
  ClassifiedsContentInfos,
  ClassifiedsLinks,
  ClassifiedsLinksSeePhotos,
  ClassifiedsLinksWhatsapp,
  ClassifiedsPagesButton,
  ClassifiedsPagesButtonsContainer,
  ClassifiedsPagesQuantity,
  Container,
  Content,
  ContentClassifieds,
  FiltersItem,
  FiltersTitle,
  SideBand,
  SideBandFilters,
  SideBandPublicity,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';

import api from '../../services/api';
import { useUser } from '../../hooks/useUser';

export function ClassifiedsPage() {
  const { host } = useUser();

  const [classifieds, setClassifieds] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    async function loadClassifieds() {
      try {
        const response = await api.get('/classifieds');
        setClassifieds(response.data);
      } catch (error) {
        toast.warn(error.response.data.error);
        console.log(error.response.data.error);
      }
    }

    async function loadRegions() {
      try {
        const response = await api.get('/regions');
        setRegions(response.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    }

    loadClassifieds();
    loadRegions();
  }, []);

  return (
    <Container>
      <HeaderLoggedComponent />

      <Content>
        <SideBand>
          <SideBandFilters>
            <FiltersTitle>
              <BiFilterAlt color="#1a1e3a" />
              <h3>Filtros</h3>
            </FiltersTitle>

            <FiltersItem>
              <span>Selecione um estado</span>
              <select name="" id="">
                <option value="a">São Paulo</option>
                {
                  regions.map((region) => (
                    <option value={region.sigla}>{region.name}</option>
                  ))
                }
              </select>
            </FiltersItem>

            <FiltersItem>
              <span>Selecione uma opção</span>
              <select name="" id="">
                <option value="a">Novos</option>
                <option value="a">Usados</option>
              </select>
            </FiltersItem>
          </SideBandFilters>

          <SideBandPublicity>
            <span>Publicidades</span>
          </SideBandPublicity>

          <SideBandPublicity>
            <span>Publicidades</span>
          </SideBandPublicity>

          <SideBandPublicity>
            <span>Publicidades</span>
          </SideBandPublicity>
        </SideBand>

        <ContentClassifieds>
          {
            classifieds.map((classified) => (
              <ClassifiedsBox key={classified.id}>
                <ClassifiedsContent href={`/classificado/${classified.id}`}>
                  <ClassifiedsContentImage>
                    <img src={`${host}/files/${classified.mainImage}`} alt={classified.title} />
                  </ClassifiedsContentImage>

                  <ClassifiedsContentInfos>
                    <ClassifiedsContentIcon>
                      <AiOutlineHeart />
                    </ClassifiedsContentIcon>

                    <ClassifiedsContentInfoLine>
                      <h1>
                        {classified.title}
                        <br />
                        {`Lojista ${classified.shop.name}`}
                      </h1>

                      <strong>
                        Postado
                        <br />
                        {classified.createdAt}
                      </strong>
                    </ClassifiedsContentInfoLine>

                    <ClassifiedsContentInfoLine>
                      <p>
                        {classified.description}
                      </p>

                      <span>
                        Avaliações
                        <br />
                        <strong>24</strong>
                      </span>
                    </ClassifiedsContentInfoLine>

                    <ClassifiedsContentInfoLine>
                      <h1>
                        {
                        new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(classified.value)
                      }
                      </h1>

                      <span>
                        Localização
                        <br />
                        <strong>{classified.uf}</strong>
                      </span>
                    </ClassifiedsContentInfoLine>

                  </ClassifiedsContentInfos>
                </ClassifiedsContent>

                <ClassifiedsLinks>
                  <ClassifiedsLinksSeePhotos href={`/classificado/${classified.id}`}>
                    <a href={`/classificado/${classified.id}`}>Ver Galeria de Fotos</a>
                  </ClassifiedsLinksSeePhotos>

                  <ClassifiedsLinksWhatsapp
                    target="_blank"
                    href={classified.shop ? `https://api.whatsapp.com/send?phone=55${classified.shop.whatsapp}&text=Olá ${classified.shop.name}, encontrei seu produto ${classified.title} na NovosUsados.com, ele ainda está disponivel?` : null}
                  >
                    Whatsapp
                  </ClassifiedsLinksWhatsapp>
                </ClassifiedsLinks>
              </ClassifiedsBox>
            ))
          }
          <ClassifiedsPagesButtonsContainer>
            <ClassifiedsPagesButton>
              <AiOutlineArrowLeft color="#fff" size={12} />
              Pagina Anterior
            </ClassifiedsPagesButton>

            <ClassifiedsPagesQuantity>
              1
            </ClassifiedsPagesQuantity>

            <ClassifiedsPagesButton>
              Proxima Pagina
              <AiOutlineArrowRight color="#fff" size={12} />
            </ClassifiedsPagesButton>
          </ClassifiedsPagesButtonsContainer>
        </ContentClassifieds>
      </Content>

      <FooterComponent />
    </Container>
  );
}
