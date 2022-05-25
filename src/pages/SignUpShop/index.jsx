import React, { useState, useEffect } from 'react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  Container,
  Content,
  ContentHeader,
  FormButtonHighLight,
  FormColumn,
  FormInput,
  FormInputBanner,
  FormInputProfile,
  FormSubmit,
  // FormSubmitButton,
  SignUpContainer,

} from './styles';

import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { useUser } from '../../hooks/useUser';
import api from '../../services/api';
import { FormButton } from '../SignUp/styles';

export function SignUpShop() {
  const { handleRegister } = useUser();

  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [site, setSite] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [category, setCategory] = useState('');
  const [instagram, setInstagram] = useState('');

  const [profile, setProfile] = useState('');
  const [profileCover, setProfileCover] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  async function handleSignUp() {
    if (
      !name
      || !slogan
      || !address
      || !email
      || !whatsapp
      || !site
      || !cnpj
      || !category
      || !instagram
      || !profile
      || !profileCover
      || !description
      || !password
      || !confirmPassword
    ) {
      return toast.warn('Preencha todos os campos.');
    }

    if (category === 'a') {
      return toast.warn('Selecione uma categoria.');
    }

    if (password.length < 6) {
      return toast.warn('A senha deve ter pelo menos 6 digitos.');
    }

    if (password !== confirmPassword) {
      return toast.warn('As senhas não se coincidem.');
    }

    if (!isNumber(whatsapp)) {
      return toast.warn('Confirme seu whatsapp.');
    }

    if (whatsapp.length !== 11) {
      return toast.warn('Confirme seu whatsapp.');
    }

    if (!isNumber(cnpj)) {
      return toast.warn('Confirme seu cnpj.');
    }

    if (cnpj.length !== 14) {
      return toast.warn('Confirme seu cnpj.');
    }

    const profileUrl = await getUrl(profile);
    const profileCoverUrl = await getUrl(profileCover);

    const data = {
      name,
      slogan,
      address,
      email,
      whatsapp,
      site,
      cnpj,
      category,
      instagram,
      profileUrl,
      profileCoverUrl,
      description,
      password,
    };

    handleRegister(data);
  }

  return (
    <Container>
      <HeaderComponent showIconsBar={false} showSearchBar={false} />
      <Content>
        <ContentHeader>
          Cadastro da sua loja
        </ContentHeader>

        <SignUpContainer>
          <FormColumn>
            <FormInput>
              <span>Nome fantasia </span>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>Slogan da loja </span>
              <input value={slogan} onChange={(e) => setSlogan(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>Endereço da loja fisica </span>
              <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>E-mail da loja </span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>Whatsapp </span>
              <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>Site </span>
              <input value={site} onChange={(e) => setSite(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>CNPJ </span>
              <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" />
            </FormInput>

            <FormInput>
              <span>Segmento de atuação </span>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="a">Categorias</option>
                {
                    categories.map((categoryItem) => (
                      <option key={categoryItem.id} value={categoryItem.id}>
                        {categoryItem.name}
                      </option>
                    ))
                  }
              </select>
            </FormInput>

            <FormInput>
              <span>Link para o Instagram </span>
              <input value={instagram} onChange={(e) => setInstagram(e.target.value)} type="text" />
            </FormInput>
          </FormColumn>

          <FormColumn>
            <FormInputProfile>
              <span>Foto de perfil </span>
              <label htmlFor="perfil">
                <MdPhotoSizeSelectActual color="#999" size={40} />
              </label>
              <input onChange={(e) => setProfile(e.target.files[0])} type="file" id="perfil" name="perfil" />
            </FormInputProfile>

            <FormInputBanner>
              <span>Foto de capa de perfil </span>
              <label htmlFor="arquivo">
                <MdPhotoSizeSelectActual color="#999" size={64} />
              </label>
              <input onChange={(e) => setProfileCover(e.target.files[0])} type="file" id="arquivo" name="arquivo" />
            </FormInputBanner>

            <FormInput>
              <span>Fale um pouco sobre sua empresa </span>
              <textarea name="" id="" cols="30" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormInput>

            <FormInput>
              <span>Senha </span>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </FormInput>

            <FormInput>
              <span>Confirme a senha </span>
              <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" />
            </FormInput>
          </FormColumn>
        </SignUpContainer>

        <FormSubmit>
          <FormButtonHighLight
            className="btn-Highlight"
            onClick={() => handleSignUp()}
          >
            Entrar
          </FormButtonHighLight>
          <FormButton className="btn" onClick={() => handleSignUp()}>
            Cadastrar
          </FormButton>

          {/* <FormSubmitButton onClick={() => handleSignUp()}>
            Criar Conta
          </FormSubmitButton> */}
        </FormSubmit>
      </Content>
      <FooterComponent />
    </Container>
  );
}
