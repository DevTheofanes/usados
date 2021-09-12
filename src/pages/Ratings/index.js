import React from 'react';
// import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { 
  Container, 
  Content,
  Ratings,
  RatingsHeader,
  RatingsStars,
  RatingsText,
  SideBar,
  SideBarPerfilImage,
  TopBarColor, 
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';

export function RatingsPage() {
  return (
    <Container>
      <HeaderLoggedComponent />
      <TopBarColor />
      <Content>
        <SideBar>
          <SideBarPerfilImage>
            <img src="https://images.unsplash.com/photo-1631287381310-925554130169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="" />
            <h3>MercadoCar</h3>
            <span>A melhor loja para seus carros</span>
          </SideBarPerfilImage>
        </SideBar>
        <Ratings>
          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>

          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>

          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>

          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>

          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>

          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>

          <RatingsHeader>
            <RatingsStars>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </RatingsStars>

            <RatingsText>
              Perfil do usuario
            </RatingsText>
          </RatingsHeader>
        </Ratings>
      </Content>
      <FooterComponent />
    </Container>
  );
}
