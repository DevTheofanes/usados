import styled from 'styled-components';

export const Container = styled.div`
  padding: ${(props) => (props.border ? null : '0 10rem')};

  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: ${(props) => (props.border ? '2px solid #A16695' : null)};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img{
    height: 2.5rem;
  }

  h1{
    text-align: center;
    text-transform: uppercase;
    cursor: initial;
    font-size: 1.75rem;
  }

  div{
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .userIconInHeader{
      height: 32px;
    }

    a + a{
      margin-left: 0.75rem;
      display: flex;

      span{
        display: flex;
        align-items: center;
        justify-content:center;

        width: 1.1rem;
        height: 1.1rem;

        border-radius: 50%;
        border: 1px solid #c2c2c2;
        color: rgb(112, 112, 112);
        font-size: 0.75rem;
      }
    }

  }

  @media (max-width:800px){
    padding: 0 4rem;
  }

  @media (max-width:600px){
    padding: 0 2rem;
  }
`;
