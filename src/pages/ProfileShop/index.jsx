/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AiOutlineUser } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
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
  ProfileImages,
  ProfileItem,
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

import api from '../../services/api';
import history from '../../services/history';
import { useUser } from '../../hooks/useUser';

export function ProfileShopPage() {
  const { id } = useParams();
  const { host } = useUser();

  const [shop, setShop] = useState({});
  const [ratings, setRatings] = useState([]);

  async function loadInfos() {
    try {
      const response = await api.get(`/user/${id}`);
      const responseRatings = await api.get(`/user/${id}/ratings`);
      setShop(response.data);
      setRatings(responseRatings.data.length);
    } catch (error) {
      toast.error(error.response.data.error);
      history.push('/');
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadInfos();
  // eslint-disable-next-line no-sparse-arrays
  }, [, id]);

  return (
    <Container>
      <HeaderLoggedComponent />
      <TopBarColor />
      <Content>
        <SideBar>
          <SideBarPerfilImage>
            <img src={`${host}/files/${shop.profileUrl}`} alt={shop.name} />
            <h3>{shop.name}</h3>
            <span>{shop.slogan}</span>
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

              <p>
                <strong>{ratings}</strong>
                {' '}
                Avaliações
                {' '}
                <br />
              </p>
            </SideBarRatings>

            <ButtonRating href="/avaliacoes/novo">Avalie Perfil</ButtonRating>
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
              <p>{shop.description}</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <GrLocation size={20} color="#000" />
                Endereço
              </SideBarInfoTitle>
              <p>{shop.address}</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <TiRssOutline size={20} color="#000" />
                Site
              </SideBarInfoTitle>
              <p>{shop.site}</p>
            </SideBarInfo>

            <SideBarInfo>
              <SideBarInfoTitle>
                <FiMail size={20} color="#000" />
                E-mail
              </SideBarInfoTitle>
              <p>{shop.email}</p>
            </SideBarInfo>

            <SideBarIcons>
              <SideBarInfosIcon
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=55${shop.whatsapp}&text=Olá ${shop.name}, encontrei seu perfil no NovosUsados.com você poderia me ajudar?`}
              >
                <IoLogoWhatsapp color="#fff" size={20} />
              </SideBarInfosIcon>

              <SideBarInfosIcon target="_blank" href={shop.instagram}>
                <RiInstagramFill color="#fff" size={20} />
              </SideBarInfosIcon>
            </SideBarIcons>
          </SideBarContent>

          <SideBarPublicity>Publicidade</SideBarPublicity>
        </SideBar>

        <Profile>
          <ProfileHeader>
            <ProfileHeaderBanner>
              <img
                src={`${host}/files/${shop.profileCoverUrl}`}
                alt={shop.name}
              />
            </ProfileHeaderBanner>
          </ProfileHeader>

          <ProfileList>
            <ProfileItem>
              <ProfileImages>
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                  alt="image"
                />

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car!
                {' '}
                <br />
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo
                veiculo
                {' '}
                <br />
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br />
                <br />
                #VemPraMacedoCar
                <br />
                Estaremos sempre à disposição para tornar seu sonho realidade!
                <br />
                (91) 99191-7857
              </p>
            </ProfileItem>

            <ProfileItem>
              <ProfileImages>
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                  alt="image"
                />

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car!
                {' '}
                <br />
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo
                veiculo
                {' '}
                <br />
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br />
                <br />
                #VemPraMacedoCar
                <br />
                Estaremos sempre à disposição para tornar seu sonho realidade!
                <br />
                (91) 99191-7857
              </p>
            </ProfileItem>

            <ProfileItem>
              <ProfileImages>
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                  alt="image"
                />

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car!
                {' '}
                <br />
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo
                veiculo
                {' '}
                <br />
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br />
                <br />
                #VemPraMacedoCar
                <br />
                Estaremos sempre à disposição para tornar seu sonho realidade!
                <br />
                (91) 99191-7857
              </p>
            </ProfileItem>

            <ProfileItem>
              <ProfileImages>
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                  alt="image"
                />

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                    alt="image"
                  />
                </div>
              </ProfileImages>

              <p>
                Mais uma venda bem sucedida feita aqui na Macedo Car!
                {' '}
                <br />
                Nosso cliente amigo saiu daqui muito satisfeito com seu novo
                veiculo
                {' '}
                <br />
                Quer ter essa experiência e sair de um carro novo pagando pouco?
                <br />
                <br />
                #VemPraMacedoCar
                <br />
                Estaremos sempre à disposição para tornar seu sonho realidade!
                <br />
                (91) 99191-7857
              </p>
            </ProfileItem>
          </ProfileList>
        </Profile>
      </Content>
      <PublicityFooter />
      <FooterComponent />
    </Container>
  );
}
