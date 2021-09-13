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
  }
from './styles';

import LogoImg from '../../assets/logo/logoWhite.png'

export function HeaderTopBarComponent() {
  return (
    <Container>
      <Header>
        <HeaderNavigation>
          <HeaderNavigationLogo href="/">
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
      </Header>
    </Container>
  );
}
      
      
