import React, { useEffect, useState } from 'react';
import {
  Container,
  CategoriesBox,
  Content,
  CategoriesBoxForPhone,
} from './styles';

import api from '../../services/api';
import { useUser } from '../../hooks/useUser';
import history from '../../services/history';

export function MainContent({ children }) {
  const { token } = useUser();

  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    const response = await api.get('/categories');

    setCategories(response.data);
  }

  useEffect(() => {
    loadCategories();
  }, [token]);

  function navigateTo(route) {
    if (route === '0') {
      return;
    }

    history.push(route);
    // eslint-disable-next-line no-undef
    window.location.reload();
    // history.go(route)
  }

  return (
    <Container>
      <CategoriesBox>
        <h1>Categorias</h1>

        <div>
          {categories.map((category) => (
            <a key={category.id} href={`/category/${category.id}`}>
              {category.name}
            </a>
          ))}
        </div>
      </CategoriesBox>

      <CategoriesBoxForPhone>
        <select onChange={(e) => navigateTo(e.target.value)}>
          <option value="0">Categorias</option>
          {categories.map((category) => (
            <option key={category.id} value={`/category/${category.id}`}>
              {category.name}
            </option>
          ))}
        </select>
      </CategoriesBoxForPhone>

      <Content>{children}</Content>
    </Container>
  );
}
