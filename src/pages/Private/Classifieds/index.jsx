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

export function DashboardClassifieds() {
  return (
    <DashboardContainer>
      <DashboardContainerButtons>
        <a href="/classificado/novo">
          Novo Anúncio
        </a>
      </DashboardContainerButtons>

      <DashboardContainerTable title="classified">
        <DashboardItemTable title="classified" />
        <DashboardItemTable title="classified" />
        <DashboardItemTable title="classified" />
        <DashboardItemTable title="classified" />
      </DashboardContainerTable>
    </DashboardContainer>
  );
}
      
      