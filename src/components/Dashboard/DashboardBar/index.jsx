import React from 'react';

import 
  { 
    Container,
    Logo,
    LinkPage,
  }
from './styles';

import { GoSearch } from 'react-icons/go';

import LogoImg from '../../../assets/logo/logoWhite.png'

export function DashboardBar() {
  return (
    <Container>
      <Logo src={LogoImg} alt="Logo"/>

      <LinkPage>
        <GoSearch />
        Minhas Postagens
      </LinkPage>

      <LinkPage>
        <GoSearch />
        Meus anúncios
      </LinkPage>
    </Container>
  );
}
      
      
