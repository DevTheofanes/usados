import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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

import { useUser } from '../../../hooks/useUser';
import api from '../../../services/api';

export function DashboardClassifieds() {
  const [classifieds, setClassifieds] = useState([]);
  const { user } = useUser();

  async function loadClassifieds() {
    try {
      const response = await api.get(`/user/${user.id}/classifieds`);
      console.log(response.data);
      setClassifieds(response.data);
    } catch (error) {
      toast.warn('Algo deu errado, tente novamente mais tarde.');
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    if (user) {
      loadClassifieds();
    }
  }, [user]);

  return (
    <DashboardContainer>
      <DashboardContainerButtons>
        <a href="/cadastro/classificado">Novo Anúncio</a>
      </DashboardContainerButtons>

      <DashboardContainerTable title="classified">
        {classifieds.map((classified) => (
          <DashboardItemTable
            key={classified.id}
            title="classified"
            classified={classified}
          />
        ))}
      </DashboardContainerTable>
    </DashboardContainer>
  );
}
