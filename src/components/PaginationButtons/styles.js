import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  width: 50%;
`;

export const Button = styled.div`
  background-color: #1a1e3a;
  color: #fff;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  padding: 0 .5rem;

  svg{
    margin: 0 .25rem;
  }
`;

export const Quantity = styled.div`
  background-color: #1a1e3a;
  color: #fff;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  padding: 0 .5rem;
`;
