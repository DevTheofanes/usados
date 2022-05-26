/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  Content,
  ProfileAvatar,
  ProfileHeaderBanner,
  ProfileItem,
  ProfileList,
  ShopInfos,
} from './styles';

import { FooterComponent } from '../../components/Footer';
import { PublicityFooter } from '../../components/PublicityFooter';

import api from '../../services/api';
import history from '../../services/history';
import { useUser } from '../../hooks/useUser';
import { CarouselProfile } from '../../components/CarouselProfile';
import { SideBarComponent } from '../../components/SideBar';
import { HeaderComponent } from '../../components/Header';
import { PaginationButtonsComponent } from '../../components/PaginationButtons';

export function ProfileShopPage() {
  const { id } = useParams();
  const { host } = useUser();

  const [shop, setShop] = useState({});
  const [posts, setPosts] = useState([]);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  async function loadPosts() {
    try {
      let filters = '';
      filters += `?page=${page}`;
      const responseRatings = await api.get(`/user/${id}/posts${filters}`);
      setPosts(responseRatings.data.posts);
      setTotal(responseRatings.data.total);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.error);
      history.push('/');
    }
  }

  async function loadInfos() {
    try {
      const response = await api.get(`/user/${id}`);
      setShop(response.data);
      loadPosts();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
      history.push('/');
    }
  }

  useEffect(() => {
    loadInfos();
  }, [id]);

  useEffect(() => {
    loadPosts();
  }, [page]);

  console.log(posts);

  return (
    <Container>
      <HeaderComponent showIconsBar={false} height="20rem" />
      <ProfileHeaderBanner>
        <img src={`${host}/files/${shop.profileCoverUrl}`} alt={shop.name} />
      </ProfileHeaderBanner>
      <Content>
        <SideBarComponent host={host} shop={shop} />

        <ProfileList>
          {posts.map((post) => (
            <ProfileItem key={post.id}>
              <ProfileAvatar>
                <img src={`${host}/files/${shop.profileUrl}`} alt={shop.name} />
                <ShopInfos>
                  <strong>{shop.name}</strong>
                  <span>{post.messageCreated}</span>
                </ShopInfos>
              </ProfileAvatar>

              <h5>{post.title}</h5>

              {post.images.length > 0 ? (
                <CarouselProfile images={post.images} />
              ) : null}

              <p>
                {post.description}
              </p>
            </ProfileItem>
          ))}

          {total > 10 ? (
            <PaginationButtonsComponent
              page={page}
              total={total}
              setPage={setPage}
            />
          ) : null}
        </ProfileList>
      </Content>

      <PublicityFooter />
      <FooterComponent />
    </Container>
  );
}
