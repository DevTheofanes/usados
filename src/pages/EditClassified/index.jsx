/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';

import { IoWarningOutline } from 'react-icons/io5';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

import { toast } from 'react-toastify';
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
  ModalButtonsContainer,
  ModalContainer,
  ModalContent,
  ModalHeaderIcon,
  SignUpContainer,
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import api from '../../services/api';
import history from '../../services/history';
import { ImageInputPrimary } from '../NewClassified/styles';
import { useUser } from '../../hooks/useUser';

export function EditClassified() {
  const { id } = useParams();
  const { host } = useUser();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [uf, setUf] = useState('');
  const [methodPay, setMethodPay] = useState('');

  const [isNew, setIsNew] = useState(true);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isPix, setIsPix] = useState(false);

  const [mainImage, setMainImage] = useState('');
  const [aImage, setAImage] = useState('');
  const [bImage, setBImage] = useState('');
  const [cImage, setCImage] = useState('');
  const [dImage, setDImage] = useState('');
  const [eImage, setEImage] = useState('');
  const [fImage, setFImage] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(`/classified/${id}`);

        const classified = response.data;

        setTitle(classified.title);
        setDescription(classified.description);
        setValue(classified.value);
        setCategory(classified.category);
        setUf(classified.uf);
        setMethodPay(classified.methodPay);

        setIsNew(classified.isNew);
        setIsDelivered(classified.isDelivered);
        setIsPix(classified.isPix);

        setMainImage(classified.mainImage);

        if (classified.files) {
          if (classified.files[1]) {
            setAImage(classified.files[1].filename);
          }

          if (classified.files[2]) {
            setBImage(classified.files[2].filename);
          }

          if (classified.files[3]) {
            setCImage(classified.files[3].filename);
          }

          if (classified.files[4]) {
            setDImage(classified.files[4].filename);
          }

          if (classified.files[5]) {
            setEImage(classified.files[5].filename);
          }

          if (classified.files[6]) {
            setFImage(classified.files[6].filename);
          }
        }

        const { data } = await api.get('/categories');

        const categoriesArray = [];
        let firstCategorie = {};

        // eslint-disable-next-line no-restricted-syntax
        for (const categoryItem of data) {
          if (String(categoryItem.id) === classified.category) {
            firstCategorie = categoryItem;
          } else {
            categoriesArray.push(categoryItem);
          }
        }

        categoriesArray.push(firstCategorie);

        categoriesArray.reverse();

        if (categoriesArray) {
          setCategories(categoriesArray);
        } else {
          setCategories(data);
        }
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

  async function putClassified(data) {
    try {
      const response = await api.put(`/classified/${id}`, data);
      toast.success(`${response.data.title} editado com sucesso!`);

      history.push('/dashboard/classificados');
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  async function handleUpdateClassified(close) {
    if (!title || !description || !category || !uf || !value || !methodPay) {
      return toast.warn('Preencha todos os campos.');
    }

    if (category === 'a') {
      return toast.warn('Selecione uma categoria.');
    }

    const data = {
      title,
      description,
      category,
      uf,
      value,
      methodPay,
      isNew,
      isDelivered,
      isPix,
      images: [],
    };

    if (mainImage) {
      data.mainImage = mainImage;
    }

    if (aImage) {
      data.images = [...data.images, aImage];
    }

    if (bImage) {
      data.images = [...data.images, bImage];
    }

    if (cImage) {
      data.images = [...data.images, cImage];
    }

    if (dImage) {
      data.images = [...data.images, dImage];
    }

    if (eImage) {
      data.images = [...data.images, eImage];
    }

    if (fImage) {
      data.images = [...data.images, fImage];
    }

    close();
    await putClassified(data);
  }

  // eslint-disable-next-line no-unused-vars
  async function handleImage(orderImage, data) {
    const url = await getUrl(data);
    switch (orderImage) {
      case 'main':
        setMainImage(url);
        break;

      case 'a':
        setAImage(url);
        break;

      case 'b':
        setBImage(url);
        break;

      case 'c':
        setCImage(url);
        break;

      case 'd':
        setDImage(url);
        break;

      case 'e':
        setEImage(url);
        break;

      case 'f':
        setFImage(url);
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} showSearchBar={false} />
      <Content>
        <ContentHeader>Editar seu produto</ContentHeader>

        <SignUpContainer>
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
              <span>Descrição </span>
              <textarea
                cols="30"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormInput>

            <FormInput>
              <span>Categoria</span>
              {/* <input value={category}
              onChange={e => setCategory(e.target.value)} type="text" /> */}

              <select onChange={(e) => setCategory(e.target.value)}>
                {categories.map((categoryItem) => (
                  <option
                    key={categoryItem.id}
                    value={categoryItem.id}
                    selected={String(categoryItem.id) === categoryItem ? true : null}
                  >
                    {categoryItem.name}
                  </option>
                ))}
              </select>
            </FormInput>

            <FormInput>
              <span>Localização</span>
              <input
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                type="text"
              />
            </FormInput>

            <FormInput>
              <span>Valor R$ </span>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="number"
              />
            </FormInput>

            <FormInput>
              <span>Forma de pagamento </span>
              <input
                value={methodPay}
                onChange={(e) => setMethodPay(e.target.value)}
                type="text"
              />
            </FormInput>

            <br />

            <FormInputCheckBox>
              <input
                type="checkbox"
                name="Novo"
                id="Novo"
                checked={isNew}
                onChange={() => setIsNew(!isNew)}
              />
              <span>Novo</span>
            </FormInputCheckBox>

            <FormInputCheckBox>
              <input
                type="checkbox"
                name="Novo"
                id="Novo"
                checked={!isNew}
                onChange={() => setIsNew(!isNew)}
              />
              <span>Usado</span>
            </FormInputCheckBox>

            <FormInputCheckBox>
              <input
                type="checkbox"
                name="Novo"
                id="Novo"
                checked={isDelivered}
                onChange={() => setIsDelivered(!isDelivered)}
              />
              <span>Faço entrega</span>
            </FormInputCheckBox>

            <FormInputCheckBox>
              <input
                type="checkbox"
                name="Novo"
                id="Novo"
                checked={isPix}
                onChange={() => setIsPix(!isPix)}
              />
              <span>Aceito Pix</span>
            </FormInputCheckBox>
          </FormColumn>

          <FormColumn>
            <FormInputPrimary>
              <span>Foto principal </span>
              {!mainImage ? (
                <label htmlFor="perfil">
                  <MdPhotoSizeSelectActual color="#999" size={52} />
                </label>
              ) : (
                <ImageInputPrimary
                  htmlFor="perfil"
                  url={`${host}/files/${mainImage}`}
                />
              )}
              <input
                type="file"
                id="perfil"
                name="perfil"
                onChange={(e) => handleImage('main', e.target.files[0])}
              />
            </FormInputPrimary>

            <FormInputMoreImagesContainer>
              <span>+ Fotos</span>
              <span />

              <FormInputMoreImage>
                {!aImage ? (
                  <label htmlFor="arquivo">
                    <MdPhotoSizeSelectActual color="#999" size={32} />
                  </label>
                ) : (
                  <ImageInputPrimary
                    htmlFor="arquivo"
                    url={`${host}/files/${aImage}`}
                  />
                )}
                <input
                  type="file"
                  onChange={(e) => handleImage('a', e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                {!bImage ? (
                  <label htmlFor="arquivob">
                    <MdPhotoSizeSelectActual color="#999" size={32} />
                  </label>
                ) : (
                  <ImageInputPrimary
                    htmlFor="arquivob"
                    url={`${host}/files/${bImage}`}
                  />
                )}
                <input
                  type="file"
                  onChange={(e) => handleImage('b', e.target.files[0])}
                  id="arquivob"
                  name="arquivob"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                {!cImage ? (
                  <label htmlFor="arquivoc">
                    <MdPhotoSizeSelectActual color="#999" size={32} />
                  </label>
                ) : (
                  <ImageInputPrimary
                    htmlFor="arquivoc"
                    url={`${host}/files/${cImage}`}
                  />
                )}
                <input
                  type="file"
                  onChange={(e) => handleImage('c', e.target.files[0])}
                  id="arquivoc"
                  name="arquivoc"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                {!dImage ? (
                  <label htmlFor="arquivod">
                    <MdPhotoSizeSelectActual color="#999" size={32} />
                  </label>
                ) : (
                  <ImageInputPrimary
                    htmlFor="arquivod"
                    url={`${host}/files/${dImage}`}
                  />
                )}
                <input
                  type="file"
                  onChange={(e) => handleImage('d', e.target.files[0])}
                  id="arquivod"
                  name="arquivod"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                {!eImage ? (
                  <label htmlFor="arquivoe">
                    <MdPhotoSizeSelectActual color="#999" size={32} />
                  </label>
                ) : (
                  <ImageInputPrimary
                    htmlFor="arquivoe"
                    url={`${host}/files/${eImage}`}
                  />
                )}
                <input
                  type="file"
                  onChange={(e) => handleImage('e', e.target.files[0])}
                  id="arquivoe"
                  name="arquivoe"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                {!fImage ? (
                  <label htmlFor="arquivof">
                    <MdPhotoSizeSelectActual color="#999" size={32} />
                  </label>
                ) : (
                  <ImageInputPrimary
                    htmlFor="arquivof"
                    url={`${host}/files/${fImage}`}
                  />
                )}
                <input
                  type="file"
                  onChange={(e) => handleImage('f', e.target.files[0])}
                  id="arquivof"
                  name="arquivof"
                />
              </FormInputMoreImage>
            </FormInputMoreImagesContainer>
          </FormColumn>
        </SignUpContainer>

        <FormSubmit>
          <FormSubmitAcceptTerms>
            <input type="checkbox" name="Novo" id="Novo" />
            <span>Declaro que as informações fornecidas são verdadeiras.</span>
          </FormSubmitAcceptTerms>

          <Popup
            nested
            modal
            trigger={<FormSubmitButton>Salvar</FormSubmitButton>}
          >
            {(close) => (
              <ModalContainer>
                <ModalHeaderIcon>
                  <IoWarningOutline color="#fff" size={56} />
                </ModalHeaderIcon>

                <ModalContent>
                  <p>
                    Se você confirmar, os dados seram aleterados em nosso banco
                    de dados, aconselhamos a sempre revisar os dados antes de
                    fazer alguma alteração.
                  </p>

                  <h4>Você deseja continuar?</h4>

                  <ModalButtonsContainer>
                    <button onClick={close}>Cancelar</button>

                    <button
                      className="btnConfirm"
                      onClick={() => handleUpdateClassified(close)}
                    >
                      Confirmar
                    </button>
                  </ModalButtonsContainer>
                </ModalContent>
              </ModalContainer>
            )}
          </Popup>
        </FormSubmit>
      </Content>
      <FooterComponent />
    </Container>
  );
}
