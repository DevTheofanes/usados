import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  max-width: 62rem;
  margin-top: 2rem;
`;

export const FooterNavigation = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 6fr 2fr;
  align-items: center;

  padding-bottom: 1rem;
  border-bottom: 2px solid #858585;
`;

export const FooterNavigationLinks = styled.div`

  a{
    text-decoration: none;
    font-weight: bold;
    color: #1a1e3a;
    margin: 0 1rem;
  }
`;

export const FooterNavigationRedesSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconCircle = styled.div`
  background-color: #626161;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterInfo = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  text-align: justify;
  margin: 2rem auto;
  max-width: 50rem;
`;

export const FooterBar = styled.div`
  background:  #1a1e3a;
  width: 100%;
  color: #fff;
  font-size: .8rem;
  display: flex;
  justify-content: center;
  padding: .8rem 0;
`;