/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  Content,
  // HeaderBar,
  // Profile,
  ProfileAvatar,
  // ProfileHeader,
  ProfileHeaderBanner,
  // ProfileImages,
  ProfileItem,
  ProfileList,
  // RatingsContainer,
  ShopInfos,
} from './styles';

// import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';
import { PublicityFooter } from '../../components/PublicityFooter';

import api from '../../services/api';
import history from '../../services/history';
import { useUser } from '../../hooks/useUser';
import { CarouselProfile } from '../../components/CarouselProfile';
// import { HeaderProfileComponent } from '../../components/HeaderProfile';
import { SideBarComponent } from '../../components/SideBar';
import { HeaderComponent } from '../../components/Header';

export function ProfileShopPage() {
  const { id } = useParams();
  const { host } = useUser();

  const [shop, setShop] = useState({});
  // eslint-disable-next-line no-unused-vars
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
      {/* <HeaderProfileComponent /> */}
      <HeaderComponent showIconsBar={false} height="20rem" />
      <ProfileHeaderBanner>
        <img
          src={`${host}/files/${shop.profileCoverUrl}`}
          alt={shop.name}
        />
      </ProfileHeaderBanner>
      <Content>
        <SideBarComponent host={host} shop={shop} />

        <ProfileList>
          <ProfileItem>
            <ProfileAvatar>
              <img
                src={`${host}/files/${shop.profileUrl}`}
                alt={shop.name}
              />
              <ShopInfos>
                <strong>{shop.name}</strong>
                <span>Publicado Ontem às 18:06</span>
              </ShopInfos>
            </ProfileAvatar>

            <h5>Titulo da Publicação</h5>

            <CarouselProfile />

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
      </Content>

      <PublicityFooter />
      <FooterComponent />
    </Container>
  );
}
