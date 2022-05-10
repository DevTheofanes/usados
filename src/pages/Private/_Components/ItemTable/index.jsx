/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Popup from 'reactjs-popup';
import { IoWarningOutline } from 'react-icons/io5';

import { toast } from 'react-toastify';
import { useUser } from '../../../../hooks/useUser';

import {
  ButtonDelete,
  ButtonEdit,
  ButtonsContainer,
  Content,
  Infos,
  InfoTextContainer,
  ModalConfirmDeleteContainer,
  Thumbnail,
  ModalConfirmDeleteButtonsContainer,
  ModalConfirmDeleteHeaderIcon,
  ConfirmDeleteContent,
} from './styles';
import api from '../../../../services/api';

export function DashboardItemTable(props) {
  const { title, classified } = props;
  const { host } = useUser();

  async function handleDeleteItem(id, close) {
    try {
      const response = await api.delete(`/classified/${id}`);
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
    }
    close();
  }

  return (
    <Content>
      <Infos>
        <Thumbnail
          src={
            classified
              ? `${host}/files/${classified.mainImage}`
              : 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
          }
          alt={classified ? classified.title : 'Hb20'}
        />
        <InfoTextContainer>
          <span>{classified ? classified.title : 'CARRO ESPORTIVO'}</span>
          {classified ? (
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(classified.value)}
            </strong>
          ) : null}
        </InfoTextContainer>
      </Infos>

      <p>
        Postado no dia
        {classified ? classified.createdAt : '15/02/2021'}
      </p>

      <ButtonsContainer>
        <ButtonEdit
          href={
            classified
              ? `/dashboard/classificado/${classified.id}`
              : '/dashboard/classificado/'
          }
        >
          Editar
          {' '}
          {title === 'classified' ? 'anúncio' : 'postagem'}
        </ButtonEdit>

        <Popup
          nested
          modal
          trigger={(
            <ButtonDelete>
              Excluir
              {' '}
              {title === 'classified' ? 'anúncio' : 'postagem'}
            </ButtonDelete>
          )}
        >
          {(close) => (
            <ModalConfirmDeleteContainer>
              <ModalConfirmDeleteHeaderIcon>
                <IoWarningOutline color="#fff" size={56} />
              </ModalConfirmDeleteHeaderIcon>

              <ConfirmDeleteContent>
                <p>
                  Se você confirmar, os dados seram apagados do nosso banco de
                  dados e não será possivel resgatar os mesmos no futuro.
                </p>

                <h4>Você deseja continuar?</h4>

                <ModalConfirmDeleteButtonsContainer>
                  <button onClick={close}>Cancelar</button>

                  <button
                    className="btnDelete"
                    onClick={() => handleDeleteItem(classified.id, close)}
                  >
                    Apagar
                  </button>
                </ModalConfirmDeleteButtonsContainer>
              </ConfirmDeleteContent>
            </ModalConfirmDeleteContainer>
          )}
        </Popup>
      </ButtonsContainer>
    </Content>
  );
}
