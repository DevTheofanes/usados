import { Container, Header, HeaderNavigation, HeaderNavigationLogo, Logo, HeaderNavigationLinks, HeaderNavigationButtons, HeaderNavigationButtonsAnnounce, HeaderNavigationButtonsEntry, HeaderSearch, HeaderSearchSelect, HeaderSearchInput, HeaderMenuCategory, HeaderMenuCategoryItem } from './styles';

import { GoSearch } from 'react-icons/go';
import { GiOfficeChair } from 'react-icons/gi';

import { FaCarSide, FaHome, FaHelicopter } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { IoBoatSharp } from 'react-icons/io5';
import { HiDesktopComputer } from 'react-icons/hi';


import LogoImg from '../../assets/logo/logoWhite.png'

export function HeaderComponent() {
  return (
    <Container>
      <Header>
        <HeaderNavigation>
          <HeaderNavigationLogo>
            <Logo src={LogoImg} alt="Usados e Novos"/>
          </HeaderNavigationLogo>

          <HeaderNavigationLinks>
            <a href="#">Vender</a>
            <a href="#">Comprar</a>
            <a href="#">Simular Financiamento</a>
            <a href="#">SAC</a>
          </HeaderNavigationLinks>

          <HeaderNavigationButtons>
            <HeaderNavigationButtonsAnnounce>
              Anunciar
            </HeaderNavigationButtonsAnnounce>

            <HeaderNavigationButtonsEntry>
              Entrar
            </HeaderNavigationButtonsEntry>
          </HeaderNavigationButtons>
        </HeaderNavigation>
      
        <HeaderSearch>
          <HeaderSearchSelect>
            <option value="a">Categorias</option>
          </HeaderSearchSelect>
          <HeaderSearchInput>
            <input type="text" placeholder="Estou procurando por..."/>
            <GoSearch color="#676767" size={15}/>
          </HeaderSearchInput>
        </HeaderSearch>
      
        <HeaderMenuCategory>
          <HeaderMenuCategoryItem color="#f05f64">
            <FaCarSide size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem color="#f0bc2c">
            <MdPhoneIphone size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem color="#52b95b">
            <FaHome size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem color="#16acde">
            <IoBoatSharp size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem color="#f287b5">
            <FaHelicopter size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem color="#733ee2">
            <GiOfficeChair size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
          <HeaderMenuCategoryItem color="#b0b69e">
            <HiDesktopComputer size={75} color="#fff"/>
          </HeaderMenuCategoryItem>
        </HeaderMenuCategory>
      </Header>
    </Container>
  );
}
      
      
