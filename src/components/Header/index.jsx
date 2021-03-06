/* eslint-disable no-undef */
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
import { useUser } from '../../hooks/useUser';

export function HeaderComponent({
  showIconsBar,
  height,
  showSearchBar,
  // noClean,
}) {
  const {
    user, search, setSearch, categorySelected, setCategorySelected,
  } = useUser();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // console.log(noClean);
    // if (!noClean) {
    //   setSearch('');
    //   setCategorySelected({});
    // }

    async function loadCategories() {
      const response = await api.get('/categories');
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  function setSearchAndSaveSearch(e) {
    localStorage.setItem('@novosUsados/search', e.target.value);
    setSearch(e.target.value);
  }

  function setCategoryAndSaveCategory(e) {
    localStorage.setItem('@novosUsados/category', e.target.value);
    setCategorySelected(e.target.value);
  }

  return (
    <Container style={height ? { height } : null}>
      <Header>
        <HeaderNavigation>
          <HeaderNavigationLogo href="/">
            <Logo src={LogoImg} alt="Usados e Novos" />
          </HeaderNavigationLogo>

          <HeaderNavigationLinks>
            {/* <a href="#">Vender</a> */}
            <a href="/classificados">Comprar</a>
            {/* <a href="#">Simular Financiamento</a> */}
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

          {user ? (
            <HeaderNavigationButton href="/dashboard/classificados">
              Meu painel
            </HeaderNavigationButton>
          ) : (
            <HeaderNavigationButton href="/login">
              Sou anunciante
            </HeaderNavigationButton>
          )}
        </HeaderNavigation>

        {showSearchBar === false ? null : (
          <HeaderSearch>
            <HeaderSearchSelect onChange={(e) => setCategoryAndSaveCategory(e)}>
              <option value="a">Categorias</option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  selected={+categorySelected === category.id}
                >
                  {category.name}
                </option>
              ))}
            </HeaderSearchSelect>
            <HeaderSearchInput>
              <input
                type="text"
                placeholder="Estou procurando por..."
                value={search}
                onChange={(e) => setSearchAndSaveSearch(e)}
              />
              <a href="/classificados">
                <GoSearch color="#676767" size={15} />
              </a>
            </HeaderSearchInput>
          </HeaderSearch>
        )}

        {showIconsBar === false ? null : (
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
        )}
      </Header>
    </Container>
  );
}
