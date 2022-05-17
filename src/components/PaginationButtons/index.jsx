import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Container, Button, Quantity } from './styles';

export function PaginationButtonsComponent() {
  return (
    <Container>
      <Button style={{ paddingRight: '16px' }}>
        <AiOutlineArrowLeft color="#fff" size={12} />
        Página Anterior
      </Button>

      <Quantity>
        1
      </Quantity>

      <Button style={{ paddingLeft: '16px' }}>
        Próxima Página
        <AiOutlineArrowRight color="#fff" size={12} />
      </Button>
    </Container>
  );
}
