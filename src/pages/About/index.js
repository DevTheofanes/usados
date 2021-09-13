import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { 
  Container,
  SignPage,
  Content,
  ListItemAbout,
  LogoIcon,
  ListAbout,
  AboutInfos,
  AboutInfosContainer,
  AboutInfoItem
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

import BackgroundBanner from '../../assets/banners/backgroundAboutBanner.jpg'
import LogoIconImage from '../../assets/logo/iconWhite.png'

export function AboutPage() {
  return (
    <Container>
      <HeaderComponent />
        <SignPage backgroundImage={BackgroundBanner}>
          <Content>
            <div></div>
            <ListAbout>
              <ListItemAbout>
                <FiCheckSquare />
                Lojas oficiais
              </ListItemAbout>

              <ListItemAbout>
                <FiCheckSquare />
                Site seguro
              </ListItemAbout>

              <ListItemAbout>
                <FiCheckSquare />
                Anúncios reais
              </ListItemAbout>

              <ListItemAbout>
                <FiCheckSquare />
                Fácil e prático
              </ListItemAbout>

              <ListItemAbout>
                <FiCheckSquare />
                Impulsione o seu anúncio
              </ListItemAbout>

              <ListItemAbout>
                <FiCheckSquare />
                Avalie o vendedor
              </ListItemAbout>

              <ListItemAbout>
                <FiCheckSquare />
                Avalie o comprador
              </ListItemAbout>

              <LogoIcon>
                <img src={LogoIconImage} alt="Novos e Usados" />
              </LogoIcon>
            </ListAbout>
            <div></div>
          </Content>
        </SignPage>
        <AboutInfos>
            <AboutInfosContainer>
              <AboutInfoItem>
                <h4>Quem nós somos?</h4>
                <p>
                  Segurança na forma de anunciar. Inovação dos processos Ética e transparência <br/>
                  So e bom pra gente, se for bom para o cliente. Foco na satisfação <br/>
                  Equipe comprometida com resultados. <br/>
                </p>
              </AboutInfoItem>

              <AboutInfoItem>
                <h4>Missão</h4>
                <p>
                  Proporcionar uma experiência de anunciar com qualidade, segurança, tornando a jornada de comprar, vender ou alugar, cada vez mais prático e seguro.
                </p>
              </AboutInfoItem>
            </AboutInfosContainer>

            <AboutInfosContainer>
              <AboutInfoItem>
                <h4>Visão</h4>
                <p>
                  Tornar o ambiente do anunciante cada vez mais seguro, prático e inovador.
                </p>
              </AboutInfoItem>

              <AboutInfoItem>
                <h4>Valores</h4>
                <p>
                Segurança na forma de anunciar. Inovação dos processos Ética e transparência. So e bom pra gente, se for bom para o cliente. Foco na satisfação. Equipe comprometida com resultados.
                </p>
              </AboutInfoItem>
            </AboutInfosContainer>
          </AboutInfos>
      <FooterComponent />
    </Container>
  );
}
