import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  width: 50%;

  cursor: pointer;
`;

export const Button = styled.div`
  background-color: var(--primaryColor);
  color: var(--white);
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  /* padding: 0 .5rem 0 1rem; */

  font-size: .8rem;
  font-weight: 500;

  svg{
    margin: 0 .5rem;
  }
`;

export const Quantity = styled.div`
  background-color: var(--primaryColor);
  color: var(--white);
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  padding: 0 .75rem;
`;
