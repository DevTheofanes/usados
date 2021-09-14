import React from 'react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

import { 
  Container,
  Content,
  ContentHeader,
  FormColumn,
  FormInput,
  FormInputCheckBox,
  FormInputMoreImage,
  FormInputMoreImagesContainer,
  FormInputPrimary,
  FormSubmit,
  FormSubmitAcceptTerms,
  FormSubmitButton,
  SignUpContainer,
  
} from './styles';


import { HeaderTopBarComponent } from '../../components/HeaderTopBar';
import { FooterComponent } from '../../components/Footer';


export function NewClassified() {
  return (
    <Container>
      <HeaderTopBarComponent />
        <Content>
          <ContentHeader>
            O que você deseja anunciar?
          </ContentHeader>

          <SignUpContainer>
            <FormColumn>
              <FormInput>
                <span>Título </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Descrição </span>
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </FormInput>

              <FormInput>
                <span>Categoria</span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Localização</span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Valor R$ </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Forma de pagamento </span>
                <input type="text" />
              </FormInput>

              <br/>

              <FormInputCheckBox>
                <input type="checkbox" name="Novo" id="Novo" />
                <span>Novo</span>
              </FormInputCheckBox>

              <FormInputCheckBox>
                <input type="checkbox" name="Novo" id="Novo" />
                <span>Usado</span>
              </FormInputCheckBox>

              <FormInputCheckBox>
                <input type="checkbox" name="Novo" id="Novo" />
                <span>Faço entrega</span>
              </FormInputCheckBox>

              <FormInputCheckBox>
                <input type="checkbox" name="Novo" id="Novo" />
                <span>Aceito Pix</span>
              </FormInputCheckBox>
            </FormColumn>
            
            <FormColumn>
              <FormInputPrimary>
                <span>Foto principal </span>
                <label for="perfil">
                  <MdPhotoSizeSelectActual color="#999" size={52}/>
                </label>
                <input type="file" id="perfil" name="perfil"/>
              </FormInputPrimary>

              <FormInputMoreImagesContainer>
                <span>+ Fotos</span>
                <span></span>
                
                <FormInputMoreImage>
                  <label for="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32}/>
                  </label>
                  <input type="file" id="arquivo" name="arquivo"/>
                </FormInputMoreImage>

                <FormInputMoreImage>
                  <label for="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32}/>
                  </label>
                  <input type="file" id="arquivo" name="arquivo"/>
                </FormInputMoreImage>

                <FormInputMoreImage>
                  <label for="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32}/>
                  </label>
                  <input type="file" id="arquivo" name="arquivo"/>
                </FormInputMoreImage>

                <FormInputMoreImage>
                  <label for="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32}/>
                  </label>
                  <input type="file" id="arquivo" name="arquivo"/>
                </FormInputMoreImage>

                <FormInputMoreImage>
                  <label for="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32}/>
                  </label>
                  <input type="file" id="arquivo" name="arquivo"/>
                </FormInputMoreImage>

                <FormInputMoreImage>
                  <label for="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32}/>
                  </label>
                  <input type="file" id="arquivo" name="arquivo"/>
                </FormInputMoreImage>
              </FormInputMoreImagesContainer>
          </FormColumn>
        </SignUpContainer>

        <FormSubmit>
          <FormSubmitAcceptTerms>
            <input type="checkbox" name="Novo" id="Novo" />
            <span>Declaro que as informações fornecidas são verdadeiras.</span>
          </FormSubmitAcceptTerms>

          <FormSubmitButton>
            Anunciar
          </FormSubmitButton>
        </FormSubmit>
        </Content>
      <FooterComponent />
    </Container>
  );
}
