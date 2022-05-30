/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  // AiOutlineHeart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';

import {
  ClassifiedsBox,
  ClassifiedsContent,
  ClassifiedsContentImage,
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

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

import api from '../../services/api';
import { useUser } from '../../hooks/useUser';
import { ShopAvatar } from '../../components/ShopAvatar';

export function ClassifiedsPage() {
  const {
    host, categorySelected, search,
  } = useUser();

  const [classifieds, setClassifieds] = useState([]);
  const [regions, setRegions] = useState([]);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [ufSelected, setUfSelected] = useState('');
  const [isNew, setIsNew] = useState('a');

  const [loading, setLoading] = useState(false);

  async function loadClassifieds() {
    try {
      setLoading(true);
      let filters = '';
      filters += `?page=${page}`;
      const searchData = localStorage.getItem('@novosUsados/search');
      const categoryData = localStorage.getItem('@novosUsados/category');

      if (categorySelected && categorySelected !== 'a') {
        filters += `&category=${categorySelected}`;
      }

      if (!categorySelected && categoryData && categoryData !== 'a') {
        filters += `&category=${categoryData}`;
      }

      if (ufSelected && ufSelected !== 'a') {
        filters += `&uf=${ufSelected}`;
      }

      if (isNew && isNew !== 'a') {
        filters += `&isNew=${isNew}`;
      }

      if (search) {
        filters += `&q=${search}`;
      }

      if (!search && searchData) {
        filters += `&q=${searchData}`;
      }

      const response = await api.get(`/classifieds/filters${filters}`);

      setClassifieds(response.data.classifieds);
      setTotal(response.data.total);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.warn(error.response.data.error);
      console.log(error.response.data.error);
    }
  }

  useEffect(() => {
    async function loadRegions() {
      try {
        const response = await api.get('/regions');
        setRegions(response.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
    loadRegions();
  }, []);

  useEffect(() => {
    if (!loading) {
      loadClassifieds();
    }
  }, [ufSelected, isNew, page, categorySelected, search]);

  function nextPage() {
    const totalPages = Math.ceil(total / 10);
    if (page >= totalPages) {
      return;
    }
    setPage(page + 1);
  }

  function backPage() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} noClean />

      <Content>
        <SideBand>
          <SideBandFilters>
            <FiltersTitle>
              <BiFilterAlt color="#1a1e3a" />
              <h3>Filtros</h3>
            </FiltersTitle>

            <FiltersItem>
              <span>Selecione um estado</span>
              <select name="" id="" onChange={(e) => setUfSelected(e.target.value)}>
                <option value="a"> </option>
                {regions.map((region) => (
                  <option key={region.name} value={region.sigla}>{region.name}</option>
                ))}
              </select>
            </FiltersItem>

            <FiltersItem>
              <span>Selecione uma opção</span>
              <select name="" id="" onChange={(e) => setIsNew(e.target.value)}>
                <option value="a"> </option>
                <option value="true">Novos</option>
                <option value="false">Usados</option>
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
          {classifieds.map((classified) => (
            <ClassifiedsBox key={classified.id}>
              <ClassifiedsContent href={`/classificado/${classified.id}`}>
                <ClassifiedsContentImage>
                  <img
                    src={`${host}/files/${classified.mainImage}`}
                    alt={classified.title}
                  />
                </ClassifiedsContentImage>

                <ClassifiedsContentInfos>
                  <ShopAvatar
                    host={host}
                    classified={classified}
                    published={classified.messageCreated}
                  />
                  <h2>
                    {classified.title}
                  </h2>

                  <p>{classified.description}</p>

                  <h3>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(classified.value)}
                  </h3>
                </ClassifiedsContentInfos>
              </ClassifiedsContent>

              <ClassifiedsLinks>
                <ClassifiedsLinksSeePhotos
                  href={`/classificado/${classified.id}`}
                >
                  Ver Galeria de Fotos
                </ClassifiedsLinksSeePhotos>

                <ClassifiedsLinksWhatsapp
                  target="_blank"
                  href={
                    classified.shop
                      ? `https://api.whatsapp.com/send?phone=55${classified.shop.whatsapp}&text=Olá ${classified.shop.name}, encontrei seu produto ${classified.title} na NovosUsados.com, ele ainda está disponivel?`
                      : null
                  }
                >
                  Whatsapp
                </ClassifiedsLinksWhatsapp>
              </ClassifiedsLinks>
            </ClassifiedsBox>
          ))}

          {
            total > 10 ? (
              <ClassifiedsPagesButtonsContainer>
                <ClassifiedsPagesButton onClick={() => backPage()}>
                  <AiOutlineArrowLeft color="#fff" size={12} />
                  Pagina Anterior
                </ClassifiedsPagesButton>

                <ClassifiedsPagesQuantity>{page}</ClassifiedsPagesQuantity>

                <ClassifiedsPagesButton onClick={() => nextPage()}>
                  Proxima Pagina
                  <AiOutlineArrowRight color="#fff" size={12} />
                </ClassifiedsPagesButton>
              </ClassifiedsPagesButtonsContainer>
            ) : null
          }
        </ContentClassifieds>
      </Content>

      <FooterComponent />
    </Container>
  );
}
