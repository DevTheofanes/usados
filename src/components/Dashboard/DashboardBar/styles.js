import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  height: 100vh;
  background-color: #1a1e3a;
  padding: 2rem;

  color: #fff;
`;

export const Logo = styled.img`
  width: 10rem;
  margin-top: 1rem;
  margin-bottom: 4.2rem;
`;

export const LinkPage = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;

  color: #fff;

  svg{
    margin-right: .5rem;
  }

  span{
    font-size: .8rem;
  }

  path{
    stroke: #fff;
  }
`;
