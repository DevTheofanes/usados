import React from 'react';

import 
  { 
    Container,
    Logo,
    LinkPage,
  }
from './styles';

import { BsFilePost } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GrDocumentConfig } from 'react-icons/gr';

import LogoImg from '../../../assets/logo/logoWhite.png'

export function DashboardBar() {
  return (
    <Container>
      <Logo src={LogoImg} alt="Logo"/>

      <LinkPage href="">
        <BsFilePost color="#fff" size={20}/>
        <span>Minhas Postagens</span>
      </LinkPage>

      <LinkPage href="">
        <AiOutlineFolderOpen color="#fff" size={20}/>
        <span>Meus anúncios</span>
      </LinkPage>

      <LinkPage href="">
        <GrDocumentConfig color="#fff" stroke="#fff" size={20}/>
        <span>Configurações da minha conta</span>
      </LinkPage>
    </Container>
  );
}
      
      
