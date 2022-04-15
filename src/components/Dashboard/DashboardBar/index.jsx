import React from 'react';

import { BsFilePost } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GrDocumentConfig } from 'react-icons/gr';
import { Container, Logo, LinkPage } from './styles';

import LogoImg from '../../../assets/logo/logoWhite.png';

export function DashboardBar() {
  return (
    <Container>
      <Logo src={LogoImg} alt="Logo" />

      <LinkPage href="/dashboard/posts">
        <BsFilePost color="#fff" size={20} />
        <span>Minhas Postagens</span>
      </LinkPage>

      <LinkPage href="/dashboard/classificados">
        <AiOutlineFolderOpen color="#fff" size={20} />
        <span>Meus anúncios</span>
      </LinkPage>

      <LinkPage href="/dashboard/account">
        <GrDocumentConfig color="#fff" stroke="#fff" size={20} />
        <span>Configurações da minha conta</span>
      </LinkPage>
    </Container>
  );
}
