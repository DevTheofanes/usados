import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useUser } from '../../../hooks/useUser';
import api from '../../../services/api';

import 
  { 
    Container,
    InfoContainer
  }
from './styles';

export function DashboardTopInfos() {
  const {user} = useUser() 

  const [views, setViews] = useState("")
  const [actives, setActives] = useState("")
  const [all, setAll] = useState("")

  useEffect(() => {
    async function loadInfos(){
      if(user.id){
        try {
          const response = await api.get(`/user/${user.id}`)
          setAll(response.data.allClassifieds)
          setViews(response.data.viewsInProfile)
          const {data} = await api.get(`/user/${user.id}/classifieds`)
          setActives(data.length)
        } catch (error) {
          toast.warn(error.response.data.error)
          console.log(error.response.data)
        }
      }
    }

    loadInfos()
  }, [user])

  return (
    <Container>
      <InfoContainer>
        <strong>Visualizações do Perfil</strong>

        <span>{views}</span>
      </InfoContainer>

      <InfoContainer>
        <strong>Anuncios Ativos</strong>

        <span>{actives}</span>
      </InfoContainer>

      <InfoContainer>
        <strong>Total de Anuncios</strong>

        <span>{all}</span>
      </InfoContainer>
    </Container>
  );
}
      
      
