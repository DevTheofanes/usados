import { Header, CentralAttendanceHeader, Logo, CartHeader, InfoPhones, BoxLogo, SubHeader, ButtonsPages, PageOption, InputBoxes } from './styles';

import { AiOutlineSearch, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

import LogoImg from '../../assets/Logo.png'

export function HeaderComponent() {
  return (
    <>
      <Header>
        <CentralAttendanceHeader>
          <FaPhoneAlt size={24} color="#78a832"/>

          <InfoPhones>
            <strong>0800 500 500</strong>
            <p>Central (Atendimento08:00 as 20:00)</p>
          </InfoPhones>
        </CentralAttendanceHeader>

        <BoxLogo>
          <Logo src={LogoImg} alt="Logo - Novos e Usados." />
        </BoxLogo>

        <CartHeader>
          <AiFillHeart size={24}/>
          <AiOutlineShoppingCart size={24}/>
          <strong>R$ 00,00</strong>
        </CartHeader>
      </Header>

      <SubHeader>
        <ButtonsPages>
          <PageOption selected>
            Home
          </PageOption>
          <PageOption>
            Sobre
          </PageOption>
          <PageOption>
            Comprar
          </PageOption>
          <PageOption>
            Vender
          </PageOption>
          <PageOption>
            Minha Loja
          </PageOption>
          <PageOption>
            Trabalhe conosco
          </PageOption>
          <PageOption>
            SAC
          </PageOption>
        </ButtonsPages>

        <InputBoxes>
          <select>
            <option>Categorias</option>
            <option>A</option>
            <option>A</option>
          </select>

          <input type="text" placeholder="Pesquisar" />

          <AiOutlineSearch color="#666" size={18} />
        </InputBoxes>
      </SubHeader>
    </>
  );
}
      
      
