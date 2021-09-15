import styled from 'styled-components';

export const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;

  width: 100%;
  padding: 2rem 8rem 2rem 10rem;
  gap: 6rem;
  /* background-color: #1a1e3a; */
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  strong{
    font-weight: 400;
    font-size: .8rem;
    color: #616160;
  }

  span{
    margin-top: .5rem;
    background-color: #cac9c9;
    opacity: .9rem;
    border-radius: .5rem;
    height: 6rem;
    width: 100%;

    font-size: 1.6rem;

    display:flex;
    align-items: center;
    justify-content: center;
  }
`;
