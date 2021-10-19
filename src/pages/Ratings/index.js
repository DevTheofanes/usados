import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import { AiOutlineUser } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { FiMousePointer, FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { TiRssOutline } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';

import { 
  Container, 
  Content,
  Ratings,
  RatingsHeader,
  RatingsStars,
  RatingsLinks,
  SideBar,
  SideBarContent,
  SideBarInfo,
  SideBarInfoTitle,
  SideBarPerfilImage,
  TopBarColor,
  RatingsStarsBox,
  RatingsList,
  RatingItem,
  RatingItemHeader,
  RatingItemUserInfos,
  RatingItemUserInfosContent,
  RatingItemHeaderAvatar, 
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';
import { PaginationButtonsComponent } from '../../components/PaginationButtons';
import { PublicityFooter } from '../../components/PublicityFooter';

import api from '../../services/api';
import history from '../../services/history';

import {useUser} from '../../hooks/useUser'

export function RatingsPage() {
  let { id } = useParams()
  let { host } = useUser()

  const [shop, setShop] = useState({})
  const [ratings, setRatings] = useState([])

  async function loadInfos(){
    try {
      const response = await api.get(`/user/${id}`)
      const responseRatings = await api.get(`/user/${id}/ratings`)
      setShop(response.data)
      setRatings(responseRatings.data)
    } catch (error) {
      toast.error(error.response.data.error)
      history.push("/")
      console.log(error.response.data)
    }
  }
  
  useEffect(()=> {
    loadInfos()
  }, [, id])

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
              <p>
                {shop.address}
              </p>
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
          </SideBarContent>
        </SideBar>
        <Ratings>
          <RatingsHeader>
            <RatingsStarsBox>
              <RatingsStars>
                <BsStarFill color="#f2be17" size={24}/>
                <BsStarFill color="#f2be17" size={24}/>
                <BsStarFill color="#f2be17" size={24}/>
                <BsStarHalf color="#f2be17" size={24}/>
                <BsStar color="#f2be17" size={24}/>
              </RatingsStars>
            </RatingsStarsBox>

            <RatingsLinks>
              <a href="/classificados">Classificados</a>
              <IoIosArrowForward color="#1a1e3a" size={14} />
              <a href="/perfil/lojista">Perfil do vendedor</a>
            </RatingsLinks>
          </RatingsHeader>

          <RatingsList>
            {
              ratings.map(rating => (
                <RatingItem>
                  <RatingItemHeader>
                    <RatingItemHeaderAvatar>
                      <img src={`${host}/files/${rating.avatarUrl}`} alt="nome user" />
                    </RatingItemHeaderAvatar>
                    <RatingItemUserInfos>
                      {/* <AiOutlineUser size={20} /> */}
                      <RatingItemUserInfosContent>
                        <strong>{rating.name}</strong>
                        <div>
                          <BsStarFill color="#f2be17" size={16}/>
                          <BsStarFill color="#f2be17" size={16}/>
                          <BsStarFill color="#f2be17" size={16}/>
                          <BsStarHalf color="#f2be17" size={16}/>
                          <BsStar color="#f2be17" size={16}/>
                        </div>
                      </RatingItemUserInfosContent>
                    </RatingItemUserInfos>
                  </RatingItemHeader>
    
                  <p>{rating.comments}</p>
                </RatingItem>
              ))
            }
          </RatingsList>

          <PaginationButtonsComponent/>
        </Ratings>
      </Content>
      <PublicityFooter/>
      <FooterComponent />
    </Container>
  );
}
