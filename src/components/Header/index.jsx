/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import { GoSearch } from 'react-icons/go';
import { GiOfficeChair } from 'react-icons/gi';

import { FaCarSide, FaHome, FaHelicopter } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { IoBoatSharp } from 'react-icons/io5';
import { HiDesktopComputer } from 'react-icons/hi';
import {
  Container,
  Header,
  HeaderNavigation,
  HeaderNavigationLogo,
  Logo,
  HeaderNavigationLinks,
  // HeaderNavigationButtons,
  // HeaderNavigationButtonsAnnounce,
  // HeaderNavigationButtonsEntry,
  HeaderSearch,
  HeaderSearchSelect,
  HeaderSearchInput,
  HeaderMenuCategory,
  HeaderMenuCategoryItem,
  HeaderNavigationButton,
} from './styles';

import LogoImg from '../../assets/logo/logoWhite.png';
import api from '../../services/api';

export function HeaderComponent() {
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [categorySelected, setCategorySelected] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderNavigation>
          <HeaderNavigationLogo href="/">
            <Logo src={LogoImg} alt="Usados e Novos" />
          </HeaderNavigationLogo>

          <HeaderNavigationLinks>
            {/* <a href="#">Vender</a> */}
            <a href="/classificados">Comprar</a>
            <a href="#">Simular Financiamento</a>
            <a href="/sac">SAC</a>
          </HeaderNavigationLinks>
          {/*
          <HeaderNavigationButtons>
            <HeaderNavigationButtonsAnnounce>
              Anunciar
            </HeaderNavigationButtonsAnnounce>

            <HeaderNavigationButtonsEntry>
              Entrar
            </HeaderNavigationButtonsEntry>
          </HeaderNavigationButtons> */}

          <HeaderNavigationButton href="/cadastro/lojista">
            Sou anunciante
          </HeaderNavigationButton>
        </HeaderNavigation>

        <HeaderSearch>
          <HeaderSearchSelect
            onChange={(e) => setCategorySelected(e.target.value)}
          >
            <option value="a">Categorias</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </HeaderSearchSelect>
          <HeaderSearchInput>
            <input type="text" placeholder="Estou procurando por..." />
            <GoSearch color="#676767" size={15} />
          </HeaderSearchInput>
        </HeaderSearch>

        <HeaderMenuCategory>
          <HeaderMenuCategoryItem href="/classificados" color="#f05f64">
            <FaCarSide size={75} color="#fff" />
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem href="/classificados" color="#f0bc2c">
            <MdPhoneIphone size={75} color="#fff" />
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem href="/classificados" color="#52b95b">
            <FaHome size={75} color="#fff" />
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem href="/classificados" color="#16acde">
            <IoBoatSharp size={75} color="#fff" />
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem href="/classificados" color="#f287b5">
            <FaHelicopter size={75} color="#fff" />
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem href="/classificados" color="#733ee2">
            <GiOfficeChair size={75} color="#fff" />
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem href="/classificados" color="#b0b69e">
            <HiDesktopComputer size={75} color="#fff" />
          </HeaderMenuCategoryItem>
        </HeaderMenuCategory>
      </Header>
    </Container>
  );
}
