import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';

import { useParams } from 'react-router-dom';
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

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';

import api from '../../services/api';
import history from '../../services/history';

export function NewRating() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [stars, setStars] = useState(0);
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
      const response = await api.post(`/user/${id}/rating`, data);
      toast.success(
        `${response.data.name}! Sua avaliação foi criada com sucesso.`,
      );

      history.push(`/perfil/lojista/${id}/avaliacoes`);
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  async function handleNewRating() {
    if (!name || !title || !email || !profile || !comments || stars <= 0) {
      return toast.warn('Preencha todos os campos.');
    }

    const avatarUrl = await getUrl(profile);

    const data = {
      name,
      title,
      email,
      rating: stars,
      avatarUrl,
      comments,
    };

    await postRating(data);
  }

  function renderStars(rating) {
    switch (rating) {
      case 5:
        return (
          <>
            <button className="render-btn" onClick={() => setStars(1)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(2)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(3)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(4)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(5)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>
          </>
        );

      case 4:
        return (
          <>
            <button className="render-btn" onClick={() => setStars(1)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(2)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(3)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(4)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(5)}>
              <BsStarFill color="#ccc" size={24} />
            </button>
          </>
        );

      case 3:
        return (
          <>
            <button className="render-btn" onClick={() => setStars(1)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(2)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(3)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(4)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(5)}>
              <BsStarFill color="#ccc" size={24} />
            </button>
          </>
        );
      case 2:
        return (
          <>
            <button className="render-btn" onClick={() => setStars(1)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(2)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(3)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(4)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(5)}>
              <BsStarFill color="#ccc" size={24} />
            </button>
          </>
        );

      case 1:
        return (
          <>
            <button className="render-btn" onClick={() => setStars(1)}>
              <BsStarFill color="#f2be17" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(2)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(3)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(4)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(5)}>
              <BsStarFill color="#ccc" size={24} />
            </button>
          </>
        );

      default:
        return (
          <>
            <button className="render-btn" onClick={() => setStars(1)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(2)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(3)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(4)}>
              <BsStarFill color="#ccc" size={24} />
            </button>

            <button className="render-btn" onClick={() => setStars(5)}>
              <BsStarFill color="#ccc" size={24} />
            </button>
          </>
        );
    }
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} />
      <Content>
        <ContentHeader>Avalie essa Loja</ContentHeader>

        <InfosUser>
          <FormColumn>
            <FormInput>
              <span>Título da Avaliação</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormInput>

            <FormInput>
              <span>Seu nome </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormInput>

            <FormInput>
              <span>Email </span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInput>
          </FormColumn>

          <FormInputPrimary>
            <span>Foto do perfil </span>
            <label htmlFor="perfil">
              <MdPhotoSizeSelectActual color="#999" size={32} />
            </label>
            <input
              onChange={(e) => setProfile(e.target.files[0])}
              type="file"
              id="perfil"
              name="perfil"
            />
          </FormInputPrimary>
        </InfosUser>

        <InputStars>
          {renderStars(stars)}
        </InputStars>

        <FormInput className="unicInput">
          <span>Messagem </span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </FormInput>

        <FormSubmit>
          <FormSubmitButton onClick={() => handleNewRating()}>
            Enviar Avaliação
          </FormSubmitButton>
        </FormSubmit>
      </Content>
      <FooterComponent />
    </Container>
  );
}
