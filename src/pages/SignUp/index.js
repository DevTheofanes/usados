import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiKeepassxc } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

import { 
  Container,
  SignPage,
  Content,
  Form,
  FormInput,
  FormButton,
  FormOptions,
  FormOptionButton,
  FormConfigs,
  FormConfigsButton,
  ContentImage
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

import BackgroundBanner from '../../assets/banners/backgroundBanner.jpg'
import SignImage from '../../assets/outros/signImage.png'

export function SignUp() {
  return (
    <Container>
      <HeaderComponent />
        <SignPage backgroundImage={BackgroundBanner}>
          <div></div>

          <Content>
            <Form>
              <FormOptions>
                <FormOptionButton active={false}>
                  Entrar
                </FormOptionButton>

                <FormOptionButton active={true}>
                  Criar Conta
                </FormOptionButton>
              </FormOptions>
              <FormInput>
                <SiKeepassxc color="#555454" size={20}/>
                <input type="text" placeholder="Nome" />
              </FormInput>

              <FormInput>
                <MdEmail color="#555454" size={20}/>
                <input type="e-mail" placeholder="E-mail" />
              </FormInput>

              <FormInput>
                <RiWhatsappFill color="#555454" size={20}/>
                <input type="tel" placeholder="Whatsapp" />
              </FormInput>

              <FormInput>
                <SiKeepassxc color="#555454" size={20}/>
                <input type="password" placeholder="Senha" />
              </FormInput>

              <FormConfigs>
              </FormConfigs>

              <FormButton>Cadastrar</FormButton>
            </Form>

            <ContentImage>
              <img src={SignImage} alt="image" />
            </ContentImage>
          </Content>
          <div></div>
        </SignPage>
      <FooterComponent />
    </Container>
  );
}
