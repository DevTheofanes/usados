import React from 'react';

import 
  { 
    Container,
  }
from './styles';


export const DashboardContainerButtons = props => {
  const { children } = props;

  return (
    <Container>
      {children}
    </Container>
  );
}
      
      