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
        <button>
          Novo Anúncio
        </button>
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
      
      