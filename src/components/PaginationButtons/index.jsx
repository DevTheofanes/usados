import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Container, Button, Quantity } from './styles';

export function PaginationButtonsComponent({ page, total, setPage }) {
  function nextPage() {
    const totalPages = Math.ceil(total / 10);
    if (page >= totalPages) {
      return;
    }
    setPage(page + 1);
  }

  function backPage() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }

  return (
    <Container>
      <Button style={{ paddingRight: '16px' }} onClick={() => backPage()}>
        <AiOutlineArrowLeft color="#fff" size={12} />
        Página Anterior
      </Button>

      <Quantity>
        {page}
      </Quantity>

      <Button style={{ paddingLeft: '16px' }} onClick={() => nextPage()}>
        Próxima Página
        <AiOutlineArrowRight color="#fff" size={12} />
      </Button>
    </Container>
  );
}
