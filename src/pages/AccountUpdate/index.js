import React from 'react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

import { 
  Container,
  Content,
  ContentHeader,
  FormColumn,
  FormInput,
  FormInputBanner,
  FormInputProfile,
  FormSubmit,
  FormSubmitButton,
  SignUpContainer,
  
} from './styles';


import { HeaderTopBarComponent } from '../../components/HeaderTopBar';
import { FooterComponent } from '../../components/Footer';


export function AccountUpdate() {
  return (
    <Container>
      <HeaderTopBarComponent />
        <Content>
          <ContentHeader>
            Mudar informações de sua loja
          </ContentHeader>

          <SignUpContainer>
            <FormColumn>
              <FormInput>
                <span>Nome fantasia </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Slogan da loja </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Endereço da loja fisica </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>E-mail da loja </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Whatsapp </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Site </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>CNPJ </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Segmento de atuação </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Link para o Instragam </span>
                <input type="text" />
              </FormInput>
            </FormColumn>
            
            <FormColumn>
              <FormInputProfile>
                <span>Foto de perfil </span>
                <label for="perfil">
                  <MdPhotoSizeSelectActual color="#999" size={40}/>
                </label>
                <input type="file" id="perfil" name="perfil"/>
              </FormInputProfile>

              <FormInputBanner>
                <span>Foto de capa de perfil </span>
                <label for="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={64}/>
                </label>
                <input type="file" id="arquivo" name="arquivo"/>
              </FormInputBanner>
              
              <FormInput>
                <span>Fale um pouco sobre sua empresa </span>
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </FormInput>

              <FormInput>
                <span>Senha </span>
                <input type="password" />
              </FormInput>

              <FormInput>
                <span>Confirme a senha </span>
                <input type="password" />
              </FormInput>
            </FormColumn>
          </SignUpContainer>

          <FormSubmit>
            <FormSubmitButton>
              Editar Conta
            </FormSubmitButton>
          </FormSubmit>
        </Content>
      <FooterComponent />
    </Container>
  );
}

