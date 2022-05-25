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
        <a href="/cadastro/classificado">
          Fazer uma publicação
        </a>
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
