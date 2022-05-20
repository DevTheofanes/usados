import React from 'react';
import { BsStarFill } from 'react-icons/bs';

import { ClassifiedShop, ShopInfos } from './styles';

export function ShopAvatar({ classified, host }) {
  return (
    <ClassifiedShop href={`/perfil/lojista/${classified.profileShop}`}>
      <img
        src={
          classified.shop ? `${host}/files/${classified.shop.profileUrl}` : ''
        }
        alt={classified.shop ? classified.shop.name : ''}
      />
      <ShopInfos>
        <div>
          <strong>{classified.shop ? classified.shop.name : ''}</strong>
          <span>{classified.shop ? classified.shop.slogan : ''}</span>
        </div>

        <small>
          <BsStarFill size={12} />
          {classified.shop ? `${classified.shop.rating.split('')[0]}.0` : '0.0'}
        </small>
      </ShopInfos>
    </ClassifiedShop>
  );
}
