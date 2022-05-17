import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  Content,
  Ratings,
  RatingsList,
  RatingItem,
  RatingItemHeader,
  RatingItemUserInfos,
  RatingItemHeaderAvatar,
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';
import { PaginationButtonsComponent } from '../../components/PaginationButtons';
import { PublicityFooter } from '../../components/PublicityFooter';

import api from '../../services/api';
import history from '../../services/history';

import { useUser } from '../../hooks/useUser';
import { SideBarComponent } from '../../components/SideBar';
import { RenderStarsComponent } from '../../components/renderStars';

export function RatingsPage() {
  const { id } = useParams();
  const { host } = useUser();

  const [shop, setShop] = useState({});
  const [ratings, setRatings] = useState([]);

  async function loadInfos() {
    try {
      const response = await api.get(`/user/${id}`);
      const responseRatings = await api.get(`/user/${id}/ratings`);
      setShop(response.data);
      setRatings(responseRatings.data);
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
      <Content>
        <SideBarComponent host={host} shop={shop} />
        <Ratings>
          {/* <RatingsHeader>
            <RatingsStarsBox>
              <RatingsStars>
                <BsStarFill color="#f2be17" size={24} />
                <BsStarFill color="#f2be17" size={24} />
                <BsStarFill color="#f2be17" size={24} />
                <BsStarHalf color="#f2be17" size={24} />
                <BsStar color="#f2be17" size={24} />
              </RatingsStars>
            </RatingsStarsBox>

            <RatingsLinks>
              <a href="/classificados">Classificados</a>
              <IoIosArrowForward color="#1a1e3a" size={14} />
              <a href="/perfil/lojista">Perfil do vendedor</a>
            </RatingsLinks>
          </RatingsHeader> */}

          <RatingsList>
            {ratings.map((rating) => (
              <RatingItem>
                <RatingItemHeader>
                  <RatingItemHeaderAvatar>
                    <img
                      src={`${host}/files/${rating.avatarUrl}`}
                      alt={rating.name}
                    />
                  </RatingItemHeaderAvatar>
                  <RatingItemUserInfos>
                    <strong>{rating.name}</strong>
                    <RenderStarsComponent size={12} rating={+rating.rating} />
                  </RatingItemUserInfos>
                </RatingItemHeader>

                <p>{rating.comments}</p>
              </RatingItem>
            ))}
          </RatingsList>

          <PaginationButtonsComponent />
        </Ratings>
      </Content>
      <PublicityFooter />
      <FooterComponent />
    </Container>
  );
}
