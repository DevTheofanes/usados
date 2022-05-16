import React from 'react';
import {
  Container,
  Header,
  HeaderNavigation,
  HeaderNavigationLogo,
  Logo,
  HeaderNavigationLinks,
} from './styles';

import LogoImg from '../../assets/logo/logoWhite.png';
import { HeaderNavigationButton } from '../Header/styles';

export function HeaderProfileComponent() {
  return (
    <Container>
      <Header>
        <HeaderNavigation>
          <HeaderNavigationLogo href="/">
            <Logo src={LogoImg} alt="Usados e Novos" />
          </HeaderNavigationLogo>

          <HeaderNavigationLinks>
            <a href="/classificados">Comprar</a>
            <a href="/sac">SAC</a>
          </HeaderNavigationLinks>

          <HeaderNavigationButton href="/cadastro/lojista">
            Sou anunciante
          </HeaderNavigationButton>
        </HeaderNavigation>
      </Header>
    </Container>
  );
}
