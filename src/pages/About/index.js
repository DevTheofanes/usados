import React from 'react';
import { FiCheckSquare, FiTarget } from 'react-icons/fi';
import { FaHandsHelping, FaRegPaperPlane, FaAward } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

import { 
  Container,
  SignPage,
  Content,
  ListItemAbout,
  LogoIcon,
  ListAbout,
  AboutInfos,
  AboutInfosContainer,
  AboutInfoItem,
  HelpContainer,
  InfoTitle,
  InfosItens,
  InfoContainer,
  TipsContainer,
  SellContainer,
  PlansContainer,
  Box
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

          <HelpContainer>
            <InfoTitle>
              <FaHandsHelping size={60}/>
              <h4>AJUDA E CONTATOS</h4>
            </InfoTitle>

            <InfoContainer>
              <InfosItens>
                <strong>Fale conosco pelo fone</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Fale conosco pelo fone</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>
          </HelpContainer>

          <TipsContainer>
            <InfoTitle>
              <FiTarget size={60}/>
              <h4>DICAS DE USO</h4>
            </InfoTitle>

            <InfoContainer>
              <InfosItens>
                <strong>Como fotogradar o produto</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Fale conosco pelo fone</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>

            <InfoTitle>
              <FaRegPaperPlane size={60}/>
              <h4>COMO PATROCINAR O ANUNCIO</h4>
            </InfoTitle>

            <InfoContainer>
              <InfosItens>
                <strong>Como fotogradar o produto</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Fale conosco pelo fone</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>
          </TipsContainer>

          <SellContainer>
            <InfoTitle>
              <div>
                <FaAward size={60}/>
                <h4>VENDER NA USADOSNOVO.COM.BR</h4>
              </div>
            </InfoTitle>

            <InfoContainer>
              <InfosItens>
                <strong>Como fotogradar o produto</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Fale conosco pelo fone</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>

            <InfoTitle>
              <FaRegPaperPlane size={60}/>
              <h4>COMO PATROCINAR O ANUNCIO</h4>
            </InfoTitle>

            <InfoContainer>
              <InfosItens>
                <strong>Como fotogradar o produto</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Fale conosco pelo fone</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>
          </SellContainer>


          <PlansContainer>
            <InfoTitle>
              <RiMoneyDollarCircleLine size={60}/>
              <h4>NOSSOS PLANOS</h4>
            </InfoTitle>

            <InfoContainer>
              <InfosItens>
                <strong>Essencial</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Expert</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>

            <InfoContainer>
              <InfosItens>
                <strong>Plano Pro</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Sou um titulo</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>

            <InfoContainer>
              <InfosItens>
                <strong>Sou um titulo</strong>
                <p>Nossos consultores estão a sua disposição e irão lhe auxiliar da melhor maneira possivel para que a sua experiência seja boa e com resultados dentro da nossa plataforma.</p>
              </InfosItens>

              <InfosItens>
                <strong>Sou um titulo</strong>
                <p>De Segunda à Sexta das 8h as 18hrs através do nosso Call Center 0800 000 000 aguardamos o seu contato.</p>
              </InfosItens>
            </InfoContainer>

            <InfoTitle>
              <div>
                <FaRegPaperPlane size={60}/>
                <h4>COMO ANUNCIAR</h4>
              </div>
            </InfoTitle>

            <Box />
          </PlansContainer>
      <FooterComponent />
    </Container>
  );
}
