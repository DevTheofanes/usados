import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

import { 
  Container,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';

import BackgroundBanner from '../../assets/banners/backgroundBanner.jpg'

export function ClassifiedsPage() {
  return (
    <Container>
      <HeaderLoggedComponent />
      <FooterComponent />
    </Container>
  );
}
