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
  const { title, classified, post } = props;
  const { host } = useUser();

  async function handleDeleteItem(close) {
    if (classified) {
      try {
        const response = await api.delete(`/classified/${classified.id}`);
        window.location.reload();
      } catch (error) {
        toast.error(error.response.data.error);
        console.log(error.response.data.error);
      }
    } else {
      try {
        const response = await api.delete(`/post/${post.id}`);
        window.location.reload();
      } catch (error) {
        toast.error(error.response.data.error);
        console.log(error.response.data.error);
      }
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
              : `${host}/files/${post.mainImageUrl}`
          }
          alt={classified ? classified.title : post.title}
        />
        <InfoTextContainer>
          <span>{classified ? classified.title : post.title}</span>
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
        {classified ? classified.messageCreated : post.messageCreated}
      </p>

      <ButtonsContainer>
        <ButtonEdit
          href={
            classified
              ? `/dashboard/classificado/${classified.id}`
              : `/dashboard/post/${post.id}`
          }
        >
          {`Editar ${title === 'classified' ? 'anúncio' : 'postagem'}`}
        </ButtonEdit>

        <Popup
          nested
          modal
          trigger={(
            <ButtonDelete>
              {`Excluir ${title === 'classified' ? 'anúncio' : 'postagem'}`}
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
                    onClick={() => handleDeleteItem(close)}
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
