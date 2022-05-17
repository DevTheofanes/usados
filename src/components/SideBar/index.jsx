import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMousePointer, FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { TiRssOutline } from 'react-icons/ti';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io5';

import {
  ButtonRating,
  ProfileInfos,
  SideBar,
  SideBarContent,
  SideBarInfo,
  SideBarInfoTitle,
} from './styles';
import { RenderStarsComponent } from '../renderStars';

export function SideBarComponent({ shop, host }) {
  function maskNumber(number) {
    const list = String(number).split('');
    return `(${list[0] + list[1]}) ${list[2] + list[3] + list[4] + list[5]}${
      list[6]
    }-${list[7] + list[8] + list[9] + list[10]}`;
  }

  return (
    <SideBar>
      <div>
        <img src={`${host}/files/${shop.profileUrl}`} alt={shop.name} />
      </div>

      <ProfileInfos>
        <div>
          <h3>{shop.name}</h3>
          <RenderStarsComponent size={16} rating={+shop.rating.split('')[0]} />
        </div>
        <span>{shop.slogan}</span>

        <ButtonRating href="/avaliacoes/novo">
          Deixar uma Avaliação
        </ButtonRating>

        <a href={`/perfil/lojista/${shop.id}/avaliacoes`}>Ver Avaliações</a>
      </ProfileInfos>

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

        <SideBarInfo>
          <SideBarInfoTitle>
            <IoLogoWhatsapp color="#000" size={20} />
            Whatsapp
          </SideBarInfoTitle>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=55${shop.whatsapp}&text=Olá ${shop.name}, encontrei seu perfil no NovosUsados.com você poderia me ajudar?`}
            rel="noreferrer"
          >
            {maskNumber(shop.whatsapp)}
          </a>
        </SideBarInfo>

        <SideBarInfo>
          <SideBarInfoTitle>
            <IoLogoInstagram color="#000" size={20} />
            Instagram
          </SideBarInfoTitle>
          <p>{shop.instagram}</p>
        </SideBarInfo>
      </SideBarContent>
    </SideBar>
  );
}
