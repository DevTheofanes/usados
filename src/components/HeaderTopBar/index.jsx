/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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
} from './styles';

import LogoImg from '../../assets/logo/logoWhite.png';
import { HeaderNavigationButton } from '../Header/styles';

export function HeaderTopBarComponent() {
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
      </Header>
    </Container>
  );
}
