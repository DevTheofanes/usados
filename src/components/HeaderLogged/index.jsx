import React from 'react';
import { GoSearch } from 'react-icons/go';
// import {
//   AiOutlineUser,
//   AiOutlineHeart,
// } from 'react-icons/ai';
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
  HeaderInfos,
  // HeaderInfoLink,
} from './styles';

import LogoImg from '../../assets/logo/logoWhite.png';
import { HeaderNavigationButton } from '../Header/styles';
import api from '../../services/api';

export function HeaderLoggedComponent() {
  const [categories, setCategories] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [categorySelected, setCategorySelected] = React.useState([]);

  React.useEffect(() => {
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
            {/* <a href="#">Simular Financiamento</a> */}
            <a href="/sac">SAC</a>
          </HeaderNavigationLinks>

          {/* <HeaderNavigationButtons>
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

        <HeaderInfos>
          {/* <HeaderInfoLink>
            <a href="#">Bem-Vindo, Ronald</a>
            <AiOutlineUser color="#fff" size={20} />
          </HeaderInfoLink>

          <HeaderInfoLink>
            <a href="/">Meus favoritos</a>
            <AiOutlineHeart color="#fff" size={20} />
          </HeaderInfoLink> */}
        </HeaderInfos>
      </Header>
    </Container>
  );
}
