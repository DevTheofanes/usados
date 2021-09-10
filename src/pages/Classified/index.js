import React from 'react';
import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

import { 
  ClassifiedPaymentContent,
  ClassifiedPaymentWhatsapp,
  ClassifiedsContentDescription,
  ClassifiedsContentFooter,
  ClassifiedsContentIcon,
  ClassifiedsContentInfoLine,
  ClassifiedsContentInfos,
  Container, 
  Content, 
  ContentClassified, 
  ContentClassifiedImagePrimary, 
  ContentClassifiedImages, 
  ContentClassifiedOthersImages, 
  ContentClassifiedPayment, 
  ContentHeader, 
  ContentHeaderBack, 
  ContentHeaderButton, 
  ContentHeaderButtonContainer, 
  ContentHeaderLinks, 
  ContentHeaderLinksShopkeeper, 
} from './styles';

import { HeaderLoggedComponent } from '../../components/HeaderLogged';
import { FooterComponent } from '../../components/Footer';

export function Classified() {
  return (
    <Container>
      <HeaderLoggedComponent />

      <Content>
        <ContentHeader>
          <ContentHeaderLinks>
            <ContentHeaderBack>
              <AiOutlineArrowLeft size={14} color="#888"/>
              <a href="#">Voltar para classificados</a>
            </ContentHeaderBack>
            <ContentHeaderLinksShopkeeper>
              <a href="#">Perfil do Vendedor</a>
              <IoIosArrowForward size={14} color="#888"/>
              <a href="#">Avaliações do Vendedor</a>
            </ContentHeaderLinksShopkeeper>
          </ContentHeaderLinks>

          <ContentHeaderButtonContainer>
            <ContentHeaderButton>
              Ver mais anuncios dessa loja
              <AiOutlineArrowRight size={14} color="#fff"/>
            </ContentHeaderButton>
          </ContentHeaderButtonContainer>
        </ContentHeader>

        <ContentClassified>
          <ContentClassifiedImages>
            <ContentClassifiedImagePrimary>
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            </ContentClassifiedImagePrimary>

            <ContentClassifiedOthersImages>
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            </ContentClassifiedOthersImages>
          </ContentClassifiedImages>
        
          <ClassifiedsContentInfos>
            <ClassifiedsContentIcon>
              <AiOutlineHeart color="#888"/>
            </ClassifiedsContentIcon>

            <ClassifiedsContentInfoLine>
              <h1>
                Honda Civic Ex 2.0
                <br />
                Lojista Honda Motors
              </h1>

              <strong>
                Hoje
                <br />
                14h20
              </strong>
            </ClassifiedsContentInfoLine>

            <ClassifiedsContentDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ClassifiedsContentDescription>

            <ClassifiedsContentFooter>
              <span>
                Avaliações
                <br/>
                <strong>45</strong>
              </span>

              <span>
                Localização
                <br/>
                <strong>São Paulo - SP</strong>
              </span>
            </ClassifiedsContentFooter>

            <ContentClassifiedPayment>
              <ClassifiedPaymentContent>
                <strong>Pagamento à Vista</strong>
                <h2>R$27.000,00</h2>
                <span>Descrição do pagamento</span>
                <span>Descrição do pagamento</span>
                <span>Descrição do pagamento</span>
              </ClassifiedPaymentContent>

              <ClassifiedPaymentWhatsapp>
                Whatsapp
              </ClassifiedPaymentWhatsapp>
            </ContentClassifiedPayment>
          </ClassifiedsContentInfos>
        </ContentClassified>
      </Content>

      <FooterComponent />
    </Container>
  );
}
