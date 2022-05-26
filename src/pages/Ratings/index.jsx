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

import { HeaderComponent } from '../../components/Header';
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
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  async function loadRating() {
    try {
      let filters = '';
      filters += `?page=${page}`;
      const responseRatings = await api.get(`/user/${id}/ratings${filters}`);
      setRatings(responseRatings.data.ratings);
      setTotal(responseRatings.data.total);
    } catch (error) {
      toast.error(error.response.data.error);
      history.push('/');
      console.log(error.response.data);
    }
  }

  async function loadInfos() {
    try {
      const response = await api.get(`/user/${id}`);
      setShop(response.data);
      loadRating();
    } catch (error) {
      toast.error(error.response.data.error);
      history.push('/');
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadInfos();
    // eslint-disable-next-line no-sparse-arrays
  }, [id]);

  useEffect(() => {
    loadRating();
    // eslint-disable-next-line no-sparse-arrays
  }, [page]);

  return (
    <Container>
      <HeaderComponent showIconsBar={false} />
      <Content>
        <div>
          <SideBarComponent host={host} shop={shop} numberRatings={+total} />
        </div>
        <Ratings>
          <RatingsList>
            {ratings.map((rating) => (
              <RatingItem key={rating.id}>
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
                <h5>{rating.title}</h5>
                <p>{rating.comments}</p>
              </RatingItem>
            ))}
          </RatingsList>

          {total > 9 ? (
            <PaginationButtonsComponent
              page={page}
              total={total}
              setPage={setPage}
            />
          ) : null}
        </Ratings>
      </Content>
      <PublicityFooter />
      <FooterComponent />
    </Container>
  );
}
