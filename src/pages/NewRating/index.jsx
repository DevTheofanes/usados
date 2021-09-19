import React from 'react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { 
  Container,
  Content,
  ContentHeader,
  FormColumn,
  FormInput,
  FormInputPrimary,
  FormSubmit,
  FormSubmitButton,
  InfosUser,
  InputStars,
  
} from './styles';


import { HeaderTopBarComponent } from '../../components/HeaderTopBar';
import { FooterComponent } from '../../components/Footer';


export function NewRating() {
  return (
    <Container>
      <HeaderTopBarComponent />
        <Content>
          <ContentHeader>
            Avalie essa Loja
          </ContentHeader>

          <InfosUser>
            <FormColumn>
              <FormInput>
                <span>Seu nome </span>
                <input type="text" />
              </FormInput>

              <FormInput>
                <span>Email </span>
                <input type="text" />
              </FormInput>
            </FormColumn>

            <FormInputPrimary>
              <span>Foto do perfil </span>
              <label for="perfil">
                <MdPhotoSizeSelectActual color="#999" size={32} />
              </label>
              <input type="file" id="perfil" name="perfil" />
            </FormInputPrimary>
          </InfosUser>

          <InputStars>
            <BsStarFill color="#f2be17" size={24}/>
            <BsStarFill color="#f2be17" size={24}/>
            <BsStarFill color="#f2be17" size={24}/>
            <BsStarHalf color="#f2be17" size={24}/>
            <BsStar color="#f2be17" size={24}/>
          </InputStars>

          <FormInput className="unicInput">
            <span>Messagem </span>
            <textarea name="" id="" cols="30" rows="3"></textarea>
          </FormInput>

          <FormSubmit>
            <FormSubmitButton>
              Enviar avaliação
            </FormSubmitButton>
          </FormSubmit>
        </Content>
      <FooterComponent />
    </Container>
  );
}
