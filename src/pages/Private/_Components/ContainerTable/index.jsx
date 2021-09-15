import React from 'react';

import 
  { 
    Container,
  }
from './styles';


export const DashboardContainerTable = props => {
  const { children, title } = props;

  return (
    <Container>
      <span className="titleTable">{title === "classified" ? "Anúncios Ativos" : "Publicado"}</span>

      {children}
    </Container>
  );
}