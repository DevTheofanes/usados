import React from 'react';

import { Container } from './styles';

export function DashboardContainerTable(props) {
  const { children, title } = props;

  return (
    <Container>
      <span className="titleTable">
        {title === 'classified' ? 'Anúncios Ativos' : 'Todos os Publicados'}
      </span>

      {children}
    </Container>
  );
}
