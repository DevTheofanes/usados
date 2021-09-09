import React from 'react';
import { FaCar, FaHome, FaHelicopter } from 'react-icons/fa';
import { MdPhoneIphone, MdDirectionsBoat } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import { 
  Container,
  Lobby,
  LobbyItem,
  SearchSpace,
  SearchHeader,
  SearchHeaderItens,
  SearchGrid,
  SearchItem,
  Shop,
  ShopInfos,
  ShopInfosBottom,
  OfficialStore,
  OfficialStoreHeader,
  OfficialStoreHeaderItens,
  OfficialStoreGrid,
  OfficialStoreItem,
  OthersServices,
  OthersServicesTitle,
  OthersServicesGrid,
  OthersServicesItem,
  Footer,
  FooterInfo,
  FooterInfoContact,
  FooterAdditional,
  FooterVip,
  FooterBar
} from './styles';

import { HeaderComponent } from '../../components/Header';

import BackgroundDashboard from '../../assets/backgroundDashboard.png'
import BackgroundForShop from '../../assets/backgroundForShop.png'
import BackgroundForServices from '../../assets/backgroundForServices.png'
import HyundaiImage from '../../assets/hyundaiImage.png'
import Signature from '../../assets/signature.png'
import LogoImg from '../../assets/Logo.png'

export function Dashboard() {
  return (
    <Container>
      <HeaderComponent />

      {/* <Lobby background={BackgroundDashboard}>
        <LobbyItem color="#f05f64">
          <FaCar size={132} color="#fff"/>
        </LobbyItem>
        <LobbyItem color="#f0bc2c">
          <MdPhoneIphone size={132} color="#fff"/>
        </LobbyItem>
        <LobbyItem color="#52b95b">
          <FaHome size={132} color="#fff"/>
        </LobbyItem>
        <LobbyItem color="#16acde">
          <MdDirectionsBoat size={132} color="#fff"/>
        </LobbyItem>
        <LobbyItem color="#f287b5">
          <FaHelicopter size={132} color="#fff"/>
        </LobbyItem>
      </Lobby>

      <SearchSpace>
        <SearchHeader>
          <strong>O que você procura hoje?</strong>

          <SearchHeaderItens>
            <span>Todos</span>
            <span>Carros</span>
            <span>Caminhões</span>
            <span>Celulares</span>
            <span>Casas</span>
            <span>Barcos</span>
            <IoIosArrowBack />
            <IoIosArrowForward/>
          </SearchHeaderItens>
        </SearchHeader>

        <SearchGrid>
          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>

          <SearchItem>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
            <strong>COROLLA XEI 2.0 2022</strong>
            <span>THAI TOYOTA</span>
            <span>R$ 134.990</span>
          </SearchItem>
        </SearchGrid>
      </SearchSpace>
    
      <Shop>
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
      </FooterBar>
     */}
    </Container>
  );
}
