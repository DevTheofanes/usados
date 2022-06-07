import React, { useState, useEffect } from 'react';
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
  ImageInputPrimary,
  SignUpContainer,
} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import api from '../../services/api';
import history from '../../services/history';
import { useUser } from '../../hooks/useUser';
// import { FiltersItem } from '../Classifieds/styles';

export function NewClassified() {
  const { user, host } = useUser();
  const [regions, setRegions] = useState([]);

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
    async function loadCategories() {
      const response = await api.get('/categories');
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  async function getUrl(image) {
    // eslint-disable-next-line no-undef
    const data = new FormData();
    data.append('image', image);

    const response = await api.post('/files/url', data);

    return response.data;
  }

  async function postClassified(data) {
    try {
      const response = await api.post(`/user/${user.id}/classified`, data);
      toast.success(`${response.data.title} criado com sucesso!`);

      history.push('/dashboard/classificados');
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  async function handleNewClassified() {
    if (
      !title
      || !description
      || !category
      || uf === 'a'
      || !value
      || !methodPay
      || !mainImage
    ) {
      return toast.warn('Preencha todos os campos.');
    }

    if (category === 'a') {
      return toast.warn('Selecione uma categoria.');
    }

    const mainImageUrl = await getUrl(mainImage);

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
      mainImage: mainImageUrl,
      images: [],
    };

    if (aImage) {
      const filename = await getUrl(aImage);
      data.images = [...data.images, filename];
    }

    if (bImage) {
      const filename = await getUrl(bImage);
      data.images = [...data.images, filename];
    }

    if (cImage) {
      const filename = await getUrl(cImage);
      data.images = [...data.images, filename];
    }

    if (dImage) {
      const filename = await getUrl(dImage);
      data.images = [...data.images, filename];
    }

    if (eImage) {
      const filename = await getUrl(eImage);
      data.images = [...data.images, filename];
    }

    if (fImage) {
      const filename = await getUrl(fImage);
      data.images = [...data.images, filename];
    }

    await postClassified(data);
  }

  useEffect(() => {
    async function loadRegions() {
      try {
        const response = await api.get('/regions');
        setRegions(response.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    }

    loadRegions();
  }, []);

  async function handleImage(orderImage, data) {
    const url = await getUrl(data);
    switch (orderImage) {
      case 'main':
        setMainImage(url);
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} showSearchBar={false} />

      <Content>
        <ContentHeader>O que você deseja anunciar?</ContentHeader>

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
                <option value="a">Categorias</option>
                {categories.map((categoryItem) => (
                  <option key={categoryItem.id} value={categoryItem.id}>
                    {categoryItem.name}
                  </option>
                ))}
              </select>
            </FormInput>

            <FormInput>
              <span>Localização</span>
              <select name="" id="" onChange={(e) => setUf(e.target.value)}>
                <option value="a"> </option>
                {regions.map((region) => (
                  <option key={region.name} value={region.sigla}>
                    {region.name}
                  </option>
                ))}
              </select>
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
                onChange={() => setIsDelivered(!isDelivered)}
              />
              <span>Faço entrega</span>
            </FormInputCheckBox>

            <FormInputCheckBox>
              <input
                type="checkbox"
                name="Novo"
                id="Novo"
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
                <ImageInputPrimary htmlFor="perfil" url={`${host}/files/${mainImage}`} />
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
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={32} />
                </label>
                <input
                  type="file"
                  onChange={(e) => setAImage(e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={32} />
                </label>
                <input
                  type="file"
                  onChange={(e) => setBImage(e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={32} />
                </label>
                <input
                  type="file"
                  onChange={(e) => setCImage(e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={32} />
                </label>
                <input
                  type="file"
                  onChange={(e) => setDImage(e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={32} />
                </label>
                <input
                  type="file"
                  onChange={(e) => setEImage(e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
                />
              </FormInputMoreImage>

              <FormInputMoreImage>
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={32} />
                </label>
                <input
                  type="file"
                  onChange={(e) => setFImage(e.target.files[0])}
                  id="arquivo"
                  name="arquivo"
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

          <FormSubmitButton onClick={() => handleNewClassified()}>
            Anunciar
          </FormSubmitButton>
        </FormSubmit>
      </Content>
      <FooterComponent />
    </Container>
  );
}
