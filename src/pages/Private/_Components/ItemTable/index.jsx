import React from 'react';

import 
  { 
    ButtonDelete,
    ButtonEdit,
    ButtonsContainer,
    Content, Infos, InfoTextContainer, Thumbnail,
  }
from './styles';


export const DashboardItemTable = props => {
  const { title, classified } = props;

  return (
    <Content>
      <Infos>
        <Thumbnail src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="Hb20" />
        <InfoTextContainer>
          <span>{classified ? classified.title : "CARRO ESPORTIVO"}</span>
          {classified ? (<strong>
            {
              new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL"
              }).format(classified.value)
            }
          </strong>) : null}
        </InfoTextContainer>
      </Infos>

      <p>Postado no dia {classified ? classified.createdAt : "15/02/2021"}</p>

      <ButtonsContainer>
        <ButtonEdit href="/dashboard/classificado">
          Editar {title === "classified" ? "anúncio" : "postagem"}
        </ButtonEdit>

        <ButtonDelete>
          Excluir {title === "classified" ? "anúncio" : "postagem"}
        </ButtonDelete>
      </ButtonsContainer>
    </Content>
  );
}