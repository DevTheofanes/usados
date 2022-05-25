/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiKeepassxc } from 'react-icons/si';

import { toast } from 'react-toastify';
import {
  Container,
  SignPage,
  Content,
  Form,
  FormInput,
  FormButton,
  FormOptionButton,
  FormConfigs,
  FormConfigsButton,
  ContentImage,
  FormButtonHighLight,
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

import BackgroundBanner from '../../assets/banners/backgroundBanner.jpg';
import SignImage from '../../assets/outros/signImage.png';
import { useUser } from '../../hooks/useUser';

export function SignIn() {
  const { handleSession } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (!email || !password) {
      return toast.warn('Preencha todos os campos.');
    }

    if (password.length < 6) {
      return toast.warn('A senha deve conter pelo menos 6 digitos.');
    }

    handleSession({ email, password });
  }

  return (
    <Container>
      <HeaderComponent height="16rem" />
      <SignPage backgroundImage={BackgroundBanner}>
        <div />

        <Content>
          <Form>
            <FormOptionButton active>Entrar</FormOptionButton>

            <FormInput>
              <BsFillPersonFill color="#555454" size={20} />
              <input
                type="e-mail"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInput>

            <FormInput>
              <SiKeepassxc color="#555454" size={20} />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormInput>

            <FormConfigs>
              <a href="#">Esqueci a senha?</a>

              <FormConfigsButton>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Lembrar acesso</label>
              </FormConfigsButton>
            </FormConfigs>

            <FormConfigs>
              <FormButtonHighLight
                className="btn-Highlight"
                href="/cadastro/lojista"
              >
                Cadastrar
              </FormButtonHighLight>
              <FormButton className="btn" onClick={() => handleSignIn()}>
                Logar
              </FormButton>
            </FormConfigs>
          </Form>

          <ContentImage>
            <img src={SignImage} alt="Signimage" />
          </ContentImage>
        </Content>
        <div />
      </SignPage>
      <FooterComponent />
    </Container>
  );
}
