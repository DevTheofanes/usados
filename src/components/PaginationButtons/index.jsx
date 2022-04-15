import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Container, Button, Quantity } from './styles';

export function PaginationButtonsComponent() {
  return (
    <Container>
      <Button>
        <AiOutlineArrowLeft color="#fff" size={12} />
        Pagina Anterior
      </Button>

      <Quantity>
        1
      </Quantity>

      <Button>
        Proxima Pagina
        <AiOutlineArrowRight color="#fff" size={12} />
      </Button>
    </Container>
  );
}
