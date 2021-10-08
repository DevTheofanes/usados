import React, {useState} from 'react';
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
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';

export function SignIn() {
  const { handleSession } = useUser();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignIn(){
    if(!email || !password){
      return toast.warn("Preencha todos os campos.")
    }

    if(password.length < 6){
      return toast.warn("A senha deve conter pelo menos 6 digitos.")
    }

    handleSession({email, password})
  }

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

                {/* <FormOptionButton active={false}>
                  Criar Conta
                </FormOptionButton> */}
              </FormOptions>
              <FormInput>
                <BsFillPersonFill color="#555454" size={20}/>
                <input type="e-mail" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </FormInput>

              <FormInput>
                <SiKeepassxc color="#555454" size={20}/>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </FormInput>

              <FormConfigs>
                <FormConfigsButton>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Lembrar acesso</label>
                </FormConfigsButton>

                <a href="#">Esqueci a senha?</a>
              </FormConfigs>

              <FormButton onClick={() => handleSignIn()}>Logar</FormButton>
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
