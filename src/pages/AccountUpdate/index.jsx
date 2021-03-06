/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';

import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { IoWarningOutline } from 'react-icons/io5';

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
  ModalButtonsContainer,
  ModalContainer,
  ModalContent,
  ModalHeaderIcon,
  SignUpContainer,
} from './styles';

// import { HeaderTopBarComponent } from '../../components/HeaderTopBar';
import { FooterComponent } from '../../components/Footer';
import { useUser } from '../../hooks/useUser';
import api from '../../services/api';
import history from '../../services/history';
import { HeaderComponent } from '../../components/Header';
import { ImageInputPrimary } from '../NewClassified/styles';

export function AccountUpdate() {
  const { user, host } = useUser();

  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [address, setAddress] = useState('');
  // const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState('');
  const [site, setSite] = useState('');
  // const [cnpj, setCnpj] = useState("")
  const [category, setCategory] = useState('');
  const [instagram, setInstagram] = useState('');

  const [profile, setProfile] = useState('');
  const [profileCover, setProfileCover] = useState('');
  const [description, setDescription] = useState('');
  // const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      // UserData
      setName(user.name);
      setSlogan(user.slogan);
      setAddress(user.address);
      setWhatsapp(user.whatsapp);
      setSite(user.site);
      setCategory(user.category);
      setInstagram(user.instagram);
      setDescription(user.description);
      setProfile(user.profileUrl);
      setProfileCover(user.profileCoverUrl);

      // Categories
      const { data } = await api.get('/categories');
      setCategories(data);

      const categoriesArray = [];
      let firstCategorie = {};

      // eslint-disable-next-line no-restricted-syntax
      for (const categoryItem of data) {
        if (String(categoryItem.id) === user.category) {
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
    }

    loadData();
  }, [user]);

  async function getUrl(image) {
    // eslint-disable-next-line no-undef
    const data = new FormData();
    data.append('image', image);

    const response = await api.post('/files/url', data);

    return response.data;
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  async function update(data) {
    try {
      const response = await api.put(`/user/${user.id}`, data);
      toast.success(
        `${response.data.name} sua loja foi atualizada com sucesso.`,
      );
      history.push('/dashboard/classificados');
      // eslint-disable-next-line no-undef
      localStorage.setItem('@novosUsados/user', JSON.stringify(response.data));
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
    }
  }

  async function handleUpdateAccount(close) {
    if (
      !name
      || !slogan
      || !address
      || !whatsapp
      || !site
      || !category
      || !instagram
      || !description
    ) {
      return toast.warn('Preencha todos os campos.');
    }

    if (!isNumber(whatsapp)) {
      return toast.warn('Confirme seu whatsapp.');
    }

    if (whatsapp.length !== 11) {
      return toast.warn('Confirme seu whatsapp.');
    }

    const data = {
      name,
      slogan,
      address,
      whatsapp,
      site,
      category,
      instagram,
      description,
    };

    if (profile) {
      data.profileUrl = profile;
    }

    if (profileCover) {
      data.profileCoverUrl = profileCover;
    }

    update(data);
    close();
  }

  async function handleImage(orderImage, data) {
    const url = await getUrl(data);
    switch (orderImage) {
      case 'profile':
        setProfile(url);
        break;

      case 'cover':
        setProfileCover(url);
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} />
      {/* <HeaderTopBarComponent /> */}
      <Content>
        <ContentHeader>Mudar informa????es de sua loja</ContentHeader>

        <SignUpContainer>
          <FormColumn>
            <FormInput>
              <span>Nome fantasia </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </FormInput>

            <FormInput>
              <span>Slogan da loja </span>
              <input
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                type="text"
              />
            </FormInput>

            <FormInput>
              <span>Endere??o da loja fisica </span>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
              />
            </FormInput>

            {/* <FormInput>
              <span>E-mail da loja </span>
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
            </FormInput> */}

            <FormInput>
              <span>Whatsapp </span>
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                type="text"
              />
            </FormInput>

            <FormInput>
              <span>Site </span>
              <input
                value={site}
                onChange={(e) => setSite(e.target.value)}
                type="text"
              />
            </FormInput>

            {/* <FormInput>
              <span>CNPJ </span>
              <input value={cnpj} onChange={e => setCnpj(e.target.value)} type="text" />
            </FormInput> */}

            <FormInput>
              <span>Segmento de atua????o </span>
              <select onChange={(e) => setCategory(e.target.value)}>
                {categories.map((categoryItem) => (
                  <option key={categoryItem.id} value={categoryItem.id}>
                    {categoryItem.name}
                  </option>
                ))}
              </select>
            </FormInput>

            <FormInput>
              <span>Link para o Instagram </span>
              <input
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                type="text"
              />
            </FormInput>
          </FormColumn>

          <FormColumn>
            <FormInputProfile>
              <span>Foto de perfil </span>
              {!profile ? (
                <label htmlFor="perfil">
                  <MdPhotoSizeSelectActual color="#999" size={40} />
                </label>
              ) : (
                <ImageInputPrimary
                  htmlFor="perfil"
                  url={`${host}/files/${profile}`}
                />
              )}
              <input
                type="file"
                id="perfil"
                name="perfil"
                onChange={(e) => handleImage('profile', e.target.files[0])}
              />
            </FormInputProfile>

            <FormInputBanner>
              <span>Foto de capa de perfil </span>
              {!profileCover ? (
                <label htmlFor="arquivo">
                  <MdPhotoSizeSelectActual color="#999" size={64} />
                </label>
              ) : (
                <ImageInputPrimary
                  htmlFor="arquivo"
                  url={`${host}/files/${profileCover}`}
                />
              )}
              <input
                type="file"
                id="arquivo"
                name="arquivo"
                onChange={(e) => handleImage('cover', e.target.files[0])}
              />
            </FormInputBanner>

            <FormInput>
              <span>Fale um pouco sobre sua empresa </span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormInput>

            {/* <FormInput>
              <span>Senha </span>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
            </FormInput>

            <FormInput>
              <span>Confirme a senha </span>
              <input
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password" />
            </FormInput> */}
          </FormColumn>
        </SignUpContainer>

        <FormSubmit>
          <Popup
            nested
            modal
            trigger={<FormSubmitButton>Salvar altera????es</FormSubmitButton>}
          >
            {(close) => (
              <ModalContainer>
                <ModalHeaderIcon>
                  <IoWarningOutline color="#fff" size={56} />
                </ModalHeaderIcon>

                <ModalContent>
                  <p>
                    Se voc?? confirmar, os dados seram aleterados em nosso banco
                    de dados, aconselhamos a sempre revisar os dados antes de
                    fazer alguma altera????o.
                  </p>

                  <h4>Voc?? deseja continuar?</h4>

                  <ModalButtonsContainer>
                    <button onClick={close}>Cancelar</button>

                    <button
                      className="btnConfirm"
                      onClick={() => handleUpdateAccount(close)}
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
