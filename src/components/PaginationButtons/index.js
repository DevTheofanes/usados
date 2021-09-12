

import { Container, Button, Quantity } from './styles';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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