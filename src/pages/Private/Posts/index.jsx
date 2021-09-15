import React from 'react';

// import 
//   { 
//     Container,
//     Content,
//   }
// from './styles';

import { DashboardContainer } from '../../../components/Dashboard';
import { DashboardContainerButtons } from '../_Components/ContainerButtons';
import { DashboardContainerTable } from '../_Components/ContainerTable';
import { DashboardItemTable } from '../_Components/ItemTable';

export function DashboardPosts() {
  return (
    <DashboardContainer>
      <DashboardContainerButtons>
        <button>
          Nova postagem no perfil
        </button>
      </DashboardContainerButtons>

      <DashboardContainerTable title="post">
        <DashboardItemTable title="post" />
        <DashboardItemTable title="post" />
        <DashboardItemTable title="post" />
        <DashboardItemTable title="post" />
      </DashboardContainerTable>
    </DashboardContainer>
  );
}
      
      