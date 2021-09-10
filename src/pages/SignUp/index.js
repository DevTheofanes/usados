import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiKeepassxc } from 'react-icons/si';

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

export function SignIn() {
  return (
    <Container>
      <HeaderComponent />
        <SignPage backgroundImage={BackgroundBanner}>
          <div></div>

          <Content>
            <Form>
              <FormOptions>
                <FormOptionButton active={true}>
                  Entrar
                </FormOptionButton>

                <FormOptionButton active={false}>
                  Criar Conta
                </FormOptionButton>
              </FormOptions>
              <FormInput>
                <BsFillPersonFill color="#555454" size={20}/>
                <input type="text" placeholder="E-mail" />
              </FormInput>

              <FormInput>
                <SiKeepassxc color="#555454" size={20}/>
                <input type="password" placeholder="Senha" />
              </FormInput>

              <FormConfigs>
                <FormConfigsButton>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Lembrar acesso</label>
                </FormConfigsButton>

                <a href="#">Esqueci a senha?</a>
              </FormConfigs>

              <FormButton>Logar</FormButton>
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
