/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { history } from '../services/history';

const UserContext = createContext([]);

export function UserContextProvider({ children }) {
  const host = 'http://147.182.225.84';

  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const [search, setSearch] = useState('');
  const [categorySelected, setCategorySelected] = useState('');

  useEffect(() => {
    async function loadData() {
      const userData = await JSON.parse(
        localStorage.getItem('@novosUsados/user'),
      );
      const tokenData = await JSON.parse(
        localStorage.getItem('@novosUsados/token'),
      );

      const searchData = localStorage.getItem('@novosUsados/search');
      const categoryData = localStorage.getItem('@novosUsados/category');

      setUser(userData);
      setToken(tokenData);
      setSearch(searchData);
      setCategorySelected(categoryData);

      api.defaults.headers.authorization = tokenData;
    }

    loadData();
    // api.defaults.headers.authorization = `Bearer ${tokenData}`;
  }, []);

  async function handleSession(data) {
    try {
      const response = await api.post('/login', data);
      toast.success(`Seja bem-vindo ${response.data.user.name}`);

      setUser(response.data.user);
      setToken(response.data.token);

      localStorage.setItem(
        '@novosUsados/user',
        JSON.stringify(response.data.user),
      );
      localStorage.setItem(
        '@novosUsados/token',
        JSON.stringify(String(response.data.token)),
      );

      history.push('/dashboard/classificados');
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  async function handleRegister(data) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post('/user', data);

      handleSession({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data);
    }
  }

  function LogoutSession() {
    localStorage.removeItem('@novosUsados/user');
    localStorage.removeItem('@novosUsados/token');

    setUser(null);
    setToken('');

    history.push('/');
  }

  return (
    <UserContext.Provider
      value={{
        host,
        user,
        token,
        handleSession,
        handleRegister,
        LogoutSession,
        search,
        setSearch,
        categorySelected,
        setCategorySelected,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
