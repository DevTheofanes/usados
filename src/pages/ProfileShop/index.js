import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { FiMousePointer, FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { TiRssOutline } from 'react-icons/ti';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';

import { 
  ButtonRating,
  Container, 
  Content,
  Profile,
  ProfileHeader,
  ProfileHeaderBanner,
  ProfileHeaderBar,
  ProfileHeaderBarInfosIcon,
  ProfileHeaderButton,
  ProfileHeaderRatings,
  ProfileHeaderRatingsContent,
  ProfileImages,
  ProfileItem,
  ProfileItemLikes,
  ProfileList,
  RatingsContainer,
  SideBar,
  SideBarContent,
  SideBarIcons,
  SideBarInfo,
  SideBarInfosIcon,
  SideBarInfoTitle,
  SideBarPerfilImage,
  SideBarPublicity,
  SideBarRatings,
  SideBarRatingsContainer,
  TopBarColor,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';
import { PublicityFooter } from '../../components/PublicityFooter';

export function ProfileShopPage() {
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

          <RatingsContainer>
            <SideBarRatings>
              <SideBarRatingsContainer>
                <BsStarFill color="#f2be17" size={26} />
                <BsStarFill color="#f2be17" size={26} />
                <BsStarFill color="#f2be17" size={26} />
                <BsStarHalf color="#f2be17" size={26} />
                <BsStar color="#f2be17" size={26} />
              </SideBarRatingsContainer>

              <p><strong>45</strong> Avaliações <br /></p>
            </SideBarRatings>

            <ButtonRating href="/avaliacoes/novo">
              Avalie Perfil
            </ButtonRating>
          </RatingsContainer>

          <SideBarContent>
            <SideBarInfo>
              <SideBarInfoTitle>
                <AiOutlineUser size={20} color="#000" />
                Conta Premium
              </SideBarInfoTitle>
              <p>Desde 2021</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <FiMousePointer size={20} color="#000" />
                Sobre
              </SideBarInfoTitle>
              <p>Mais uma venda bem sucedida feita aqui na Macedor Car! Nosso cliente amigo saiu daqui muito satisfeito com seu novo veiculo quer ter essa experiência e sair de um carro novo pagando pouco?</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <GrLocation size={20} color="#000" />
                Endereço
              </SideBarInfoTitle>
              <p>
                Av. Franscisco, Caldeira Castelo <br/>
                Branco, 1876, - Fatima, Belém, <br/>
                PA, 66063-223
              </p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <TiRssOutline size={20} color="#000" />
                Site
              </SideBarInfoTitle>
              <p>www.marcedocar.com.br</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <FiMail size={20} color="#000" />
                E-mail
              </SideBarInfoTitle>
              <p>vendas@mercadocar.com</p>
            </SideBarInfo>

            <SideBarIcons>
              <SideBarInfosIcon>
                <IoLogoWhatsapp color="#fff" size={20} />
              </SideBarInfosIcon>

              <SideBarInfosIcon>
                <RiInstagramFill color="#fff" size={20} />
              </SideBarInfosIcon>
              </SideBarIcons>
          </SideBarContent>
        
          <SideBarPublicity>
            Publicidade
          </SideBarPublicity>
        </SideBar>
      
        <Profile>
          <ProfileHeader>
            <ProfileHeaderBanner>
              <img src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="Banner Lojista" />
            </ProfileHeaderBanner>
          </ProfileHeader>
        
          <ProfileList>
            <ProfileItem>
              <ProfileImages>
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />

                <div>
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car! <br/>
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo veiculo <br/>
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br/>
                <br/>
                #VemPraMacedoCar<br/>
                Estaremos sempre à disposição para tornar seu sonho realidade!<br/>
                (91) 99191-7857
              </p>
            </ProfileItem>
          
            <ProfileItem>
              <ProfileImages>
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />

                <div>
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car! <br/>
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo veiculo <br/>
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br/>
                <br/>
                #VemPraMacedoCar<br/>
                Estaremos sempre à disposição para tornar seu sonho realidade!<br/>
                (91) 99191-7857
              </p>
            </ProfileItem>
          
            <ProfileItem>
              <ProfileImages>
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />

                <div>
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car! <br/>
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo veiculo <br/>
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br/>
                <br/>
                #VemPraMacedoCar<br/>
                Estaremos sempre à disposição para tornar seu sonho realidade!<br/>
                (91) 99191-7857
              </p>
            </ProfileItem>
          
            <ProfileItem>
              <ProfileImages>
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />

                <div>
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="image" />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car! <br/>
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo veiculo <br/>
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br/>
                <br/>
                #VemPraMacedoCar<br/>
                Estaremos sempre à disposição para tornar seu sonho realidade!<br/>
                (91) 99191-7857
              </p>
            </ProfileItem>
          
          
          </ProfileList>
        </Profile>
      </Content>
      <PublicityFooter/>
      <FooterComponent />
    </Container>
  );
}
