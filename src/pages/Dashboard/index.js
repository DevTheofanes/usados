import React from 'react';

import { 
  Container,
  SearchSpace,
  SearchHeader,
  SearchBorder,
  SearchGrid,
  SearchItem,
  InfoContent,
  InfoContentTitle,
  InfoContentDuoImages,
  InfoContentUnicImage
} from './styles';

import { HeaderComponent } from '../../components/Header';

import SecureBanner from '../../assets/banners/secureBanner.png'
import OficialBanner from '../../assets/banners/oficialBanner.png'
import CommentsBanner from '../../assets/banners/commentsBanner.png'
import { FooterComponent } from '../../components/Footer';

export function Dashboard() {
  return (
    <Container>
      <HeaderComponent />

      <SearchSpace>
        <SearchHeader>
          <strong>O que você procura hoje?</strong>
        </SearchHeader>

        <SearchGrid>
          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem href="/classificado">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <SearchBorder />
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>
        </SearchGrid>
      </SearchSpace>
    
      <InfoContent href="/sobre">
        <InfoContentTitle>
          <strong>Sobre a usados novo</strong>
        </InfoContentTitle>

        <InfoContentDuoImages>
          <img src={SecureBanner} alt="Banner"/>
          <img src={OficialBanner} alt="Banner"/>
        </InfoContentDuoImages>

        <InfoContentUnicImage src={CommentsBanner} alt="Banner"/>
      </InfoContent>

      <FooterComponent />

      {/* <Shop>
        <img src={HyundaiImage} alt="Hyundai"/>

        <ShopInfos background={BackgroundForShop}>
          <h6>Loja Oficial Hyundai Unique</h6>
          <p>Temos a nossa loja online no site UsadosNovo.com.br e o retorno 
tem sido incrivel. Foi necessário destinar consultores de vendas 
especificos para atender as demandas do site. Indicamos e 
confiamos na imparcialidade e confiança do site. </p>
          <ShopInfosBottom>
            <img src={Signature} alt="Assinatura" />

            <div>
              <strong>João</strong>
              <span>Coordenador de vendas</span>
            </div>
          </ShopInfosBottom>

        </ShopInfos>
      </Shop>

      <OfficialStore>
        <OfficialStoreHeader>
          <strong>Lojas Oficiais</strong>

          <OfficialStoreHeaderItens>
            <IoIosArrowBack />
            <IoIosArrowForward/>
          </OfficialStoreHeaderItens>
        </OfficialStoreHeader>

        <OfficialStoreGrid>
          <OfficialStoreItem firstLine>
            <strong>Iphone Bel</strong>
            <span>Acessar Loja</span>
          </OfficialStoreItem>

          <OfficialStoreItem firstLine>
            <strong>Iphone Bel</strong>
            <span>Acessar Loja</span>
          </OfficialStoreItem>

          <OfficialStoreItem firstLine>
            <strong>Iphone Bel</strong>
            <span>Acessar Loja</span>
          </OfficialStoreItem>

          <OfficialStoreItem>
            <strong>Iphone Bel</strong>
            <span>Acessar Loja</span>
          </OfficialStoreItem>

          <OfficialStoreItem>
            <strong>Iphone Bel</strong>
            <span>Acessar Loja</span>
          </OfficialStoreItem>

          <OfficialStoreItem>
            <strong>Iphone Bel</strong>
            <span>Acessar Loja</span>
          </OfficialStoreItem>
        </OfficialStoreGrid>
      </OfficialStore> 
      
      <OthersServices background={BackgroundForServices}>
        <OthersServicesTitle>
          <strong>OUTROS SERVIÇOS</strong>
        </OthersServicesTitle>

        <OthersServicesGrid>
          <OthersServicesItem>
            <IoFastFoodOutline color="#52b95b" size={72} />
            <strong>Treinamentos</strong>
            <span>Saiba Mais</span>
          </OthersServicesItem>

          <OthersServicesItem>
            <IoFastFoodOutline color="#52b95b" size={72} />
            <strong>Treinamentos</strong>
            <span>Saiba Mais</span>
          </OthersServicesItem>

          <OthersServicesItem>
            <IoFastFoodOutline color="#52b95b" size={72} />
            <strong>Treinamentos</strong>
            <span>Saiba Mais</span>
          </OthersServicesItem>

          <OthersServicesItem>
            <IoFastFoodOutline color="#52b95b" size={72} />
            <strong>Treinamentos</strong>
            <span>Saiba Mais</span>
          </OthersServicesItem>
        </OthersServicesGrid>
      </OthersServices>

      <Footer>
        <FooterInfo>
          <img src={LogoImg} alt="Logo - Novos e Usados." />
          <p>O maior e mais confiavel site de compra e vendas da 
internet, fale conosco e saiba mais</p>

          <FooterInfoContact>
            <AiOutlineMail color="#f89c40" />
            <span>adm@usadosnovo.com.br</span>
          </FooterInfoContact>

          <FooterInfoContact>
            <FiPhone color="#f89c40" />
            <span>0800 0000 000</span>
          </FooterInfoContact>

          <FooterInfoContact>
            <AiFillHome color="#f89c40" />
            <span>Brasil</span>
          </FooterInfoContact>
        </FooterInfo>
      
        <FooterAdditional>
          <strong>Institucional</strong>
          <div>
            <span>Inicio</span>
            <span>Sobre</span>
            <span>Classificados</span>
            <span>Trabalhe Conosco</span>
            <span>Novidades</span>
            <span>Contatos</span>
          </div>
        </FooterAdditional>

        <FooterAdditional>
          <strong>Serviços</strong>
          
          <div>
            <span>Marketing</span>
            <span>Sistema Interno</span>
            <span>Criar Anuncios</span>
            <span>Minha Loja</span>
            <span>Suporte Online</span>
            <span>Suporte Presencial</span>
          </div>
        </FooterAdditional>

        <FooterVip>
          <strong>Lista vip de novidades</strong>
          <div>
            <span>Recebe primeiro nossos Classificados</span>
            <input placeholder="Nome"/>
            <input placeholder="E-mail"/>
            <button>Enviar</button>
          </div>
        </FooterVip>
      </Footer>

      <FooterBar>
        <span>Copyright 2021 <strong>usadosnovo.com.br</strong> direitos reservados. Criado por <strong>@agrc.design</strong></span>
      </FooterBar> */}
    
    </Container>
  );
}
