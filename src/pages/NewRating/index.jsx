import React, { useState } from 'react';
import { toast } from 'react-toastify';
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

import api from '../../services/api';
import history from '../../services/history';

export function NewRating() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [comments, setComments] = useState('');

  async function getUrl(image) {
    // eslint-disable-next-line no-undef
    const data = new FormData();
    data.append('image', image);

    const response = await api.post('/files/url', data);

    return response.data;
  }

  async function postRating(data) {
    try {
      const response = await api.post('/user/3/rating', data);
      toast.success(`${response.data.name}! Sua avaliação foi criada com sucesso.`);

      history.push('/');
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  async function handleNewRating() {
    if (!name || !email || !profile || !comments) {
      return toast.warn('Preencha todos os campos.');
    }

    const avatarUrl = await getUrl(profile);

    const data = {
      name,
      email,
      rating: '4',
      avatarUrl,
      comments,
    };

    await postRating(data);
  }

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
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormInput>

            <FormInput>
              <span>Email </span>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormInput>
          </FormColumn>

          <FormInputPrimary>
            <span>Foto do perfil </span>
            <label htmlFor="perfil">
              <MdPhotoSizeSelectActual color="#999" size={32} />
            </label>
            <input onChange={(e) => setProfile(e.target.files[0])} type="file" id="perfil" name="perfil" />
          </FormInputPrimary>
        </InfosUser>

        <InputStars>
          <BsStarFill color="#f2be17" size={24} />
          <BsStarFill color="#f2be17" size={24} />
          <BsStarFill color="#f2be17" size={24} />
          <BsStarHalf color="#f2be17" size={24} />
          <BsStar color="#f2be17" size={24} />
        </InputStars>

        <FormInput className="unicInput">
          <span>Messagem </span>
          <textarea name="" id="" cols="30" rows="3" value={comments} onChange={(e) => setComments(e.target.value)} />
        </FormInput>

        <FormSubmit>
          <FormSubmitButton onClick={() => handleNewRating()}>
            Enviar avaliação
          </FormSubmitButton>
        </FormSubmit>
      </Content>
      <FooterComponent />
    </Container>
  );
}
