import React from 'react';

import 
  { 
    Container,
    InfoContainer
  }
from './styles';

export function DashboardTopInfos() {
  return (
    <Container>
      <InfoContainer>
        <strong>Visualizações do Perfil</strong>

        <span>120</span>
      </InfoContainer>

      <InfoContainer>
        <strong>Anuncios Ativos</strong>

        <span>38</span>
      </InfoContainer>

      <InfoContainer>
        <strong>Total de Anuncios</strong>

        <span>60</span>
      </InfoContainer>
    </Container>
  );
}
      
      
