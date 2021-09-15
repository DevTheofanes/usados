import React from 'react';

import 
  { 
    Container,
    Content,
  }
from './styles';

import { DashboardBar } from './DashboardBar';
import { DashboardTopInfos } from './DashboardTopInfos';
import { DashboardPublicity } from './DashboardPublicity';

export const DashboardContainer = props => {
  const { children } = props;

  return (
    <Container>
      <DashboardBar />

      <Content>
        <DashboardTopInfos/>

        {children}
      </Content>

      <DashboardPublicity />
    </Container>
  );
}
      
      