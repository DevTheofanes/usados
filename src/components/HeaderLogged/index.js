import 
  { 
    Container,
    Header, 
    HeaderNavigation, 
    HeaderNavigationLogo, 
    Logo, 
    HeaderNavigationLinks, 
    HeaderNavigationButtons, 
    HeaderNavigationButtonsAnnounce, 
    HeaderNavigationButtonsEntry, 
    HeaderSearch, 
    HeaderSearchSelect, 
    HeaderSearchInput, 
    HeaderMenuCategory, 
    HeaderMenuCategoryItem 
  }
from './styles';

import { GoSearch } from 'react-icons/go';


import LogoImg from '../../assets/logo/logoWhite.png'

export function HeaderLoggedComponent() {
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
      </Header>
    </Container>
  );
}
      
      
