import { Container, FooterNavigation, FooterNavigationLinks, FooterNavigationRedesSociais, IconCircle, FooterInfo, FooterBar } from './styles';

import { FaFacebook } from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';


export function FooterComponent() {
  return (
    <>
      <Container>
        <FooterNavigation>
          <FooterNavigationLinks>
            <a href="/sobre">Ajuda e contato</a>
            <a href="/sobre">Dicas de Uso</a>
            <a href="/sobre">Vender na UsadosNovo</a>
            <a href="/sobre">Plano</a>
            <a href="/sobre">Como Anunciar</a>
          </FooterNavigationLinks>

          <FooterNavigationRedesSociais>
            <IconCircle>
              <IoLogoWhatsapp color="#fff" size={20} />
            </IconCircle>

            <IconCircle>
              <RiInstagramFill color="#fff" size={20} />
            </IconCircle>

            <IconCircle>
              <FaFacebook color="#fff" size={20} />
            </IconCircle>

            <IconCircle>
              <SiYoutube color="#fff" size={20} />
            </IconCircle>
          </FooterNavigationRedesSociais>
        </FooterNavigation>

        <FooterInfo>
          <p>
            Sobre a USADOSNOVO, <strong>Termos de uso, Política de privacidade e Proteção à Propriedade Intelectual</strong><br />
            ©️ MDR Serviços de Gestão Online Ltda. Next Office, BR-316, 893, Sala 912, Atalaia, Ananindeua - PA
          </p>
        </FooterInfo>
      </Container>

      <FooterBar>
        <p>Copyright @2021 usadosnovo.com.br direitos reservados. Criado por  @agrc.design</p>
      </FooterBar>
    </>
  );
}
      
      
