/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
// import { MdPhotoSizeSelectActual } from 'react-icons/md';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  Container,
  Content,
  ContentHeader,
  FormColumn,
  FormInput,
  // FormInputCheckBox,
  // FormInputMoreImage,
  // FormInputMoreImagesContainer,
  FormInputImage,
  FormSubmit,
  FormSubmitAcceptTerms,
  FormSubmitButtons,
  FormContainer,
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import api from '../../services/api';
import history from '../../services/history';
import { Carousel } from '../../components/Carousel';

export function EditPost() {
  const { id } = useParams();

  const [confirm, setConfirm] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(`/post/${id}`);

        const post = response.data;

        setTitle(post.title);
        setDescription(post.description);
        setImages(post.images);
      } catch (error) {
        console.log();
        toast.warn(error.response.data.error);
        console.log(error.response.data.error);
      }
    }

    loadData();
  }, [id]);

  async function getUrl(image) {
    // eslint-disable-next-line no-undef
    const data = new FormData();
    data.append('image', image);

    const response = await api.post('/files/url', data);

    return response.data;
  }

  async function putPost(data) {
    try {
      const response = await api.put(`/post/${id}`, data);
      toast.success(`${response.data.title} editado com sucesso!`);

      history.push('/dashboard/posts');
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  async function handleUpdatePost() {
    if (!confirm) {
      return toast.warn('Você Confirmar as Informações.');
    }

    if (!title || !description) {
      return toast.warn('Preencha todos os campos.');
    }

    if (!images.length) {
      return toast.warn('Para realizar uma postagem, precisa de pelo menos uma foto.');
    }

    const imagesData = [];

    for (const img of images) {
      imagesData.push(img.filename);
    }

    const data = {
      title,
      description,
      images: imagesData,
    };

    await putPost(data);
  }

  async function loadImage(image) {
    const filename = await getUrl(image);
    setImages([...images, {
      image,
      filename,
    }]);
  }

  function removeImage(image) {
    const filename = image.filename.split('/files/')[1];
    const arrayWithoutImage = images.filter((i) => i.filename !== filename);
    setImages(arrayWithoutImage);
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} showSearchBar={false} />

      <Content>
        <ContentHeader>Editar postagem</ContentHeader>

        <FormContainer>
          <FormColumn>
            <FormInput>
              <span>Título </span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </FormInput>

            <FormInput>
              <span>Quais as novidades? </span>
              <textarea
                cols="30"
                rows="18"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormInput>

            <FormInputImage>
              <span>Images </span>
              <label htmlFor="perfil">
                Adicionar Foto
              </label>
              <input
                type="file"
                id="perfil"
                name="perfil"
                onChange={(e) => loadImage(e.target.files[0])}
              />
            </FormInputImage>
          </FormColumn>

          <FormColumn>
            {/* <FormInputImage>
              <span>Images </span>
              <label htmlFor="perfil">
                Adicionar Foto
              </label>
              <input
                type="file"
                id="perfil"
                name="perfil"
                onChange={(e) => loadImage(e.target.files[0])}
              />
            </FormInputImage> */}

            {
            images.length ? (
              <>
                <span>Pre-Visualização </span>
                <Carousel images={images} preview onRemoveImage={(image) => removeImage(image)} />
              </>
            ) : null
          }
          </FormColumn>

        </FormContainer>

        <FormSubmit>
          <FormSubmitAcceptTerms>
            <input
              type="checkbox"
              name="confirm"
              id="confirm"
              checked={confirm}
              onChange={() => setConfirm(!confirm)}
            />
            <span>Declaro que as informações fornecidas são verdadeiras.</span>
          </FormSubmitAcceptTerms>

          <FormSubmitButtons>
            <a href="/dashboard/posts">
              Cancelar
            </a>

            <button onClick={() => handleUpdatePost()}>
              Anunciar
            </button>
          </FormSubmitButtons>
        </FormSubmit>
      </Content>
      <FooterComponent />
    </Container>
  );
}
