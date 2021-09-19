import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  background-color: #1a1e3a;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  width: 100%;
  max-width: 62rem;

  position:relative;
`;

export const HeaderNavigation = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4.4fr 5.2fr 1.8fr;
  align-items: center;
`;

export const HeaderNavigationLogo = styled.a`
  display: flex;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  width: 12rem;
  height: 2.8rem;
  margin: 1.8rem 0;
`;

export const HeaderNavigationLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;

  a{
    text-decoration: none;
    color: #fff;
    margin: 0 1rem;
    font-weight: bold;
  }
`;


export const HeaderNavigationButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderNavigationButtonsAnnounce = styled.button`
  background-color: #f2be17;
  color:  #1a1e3a;
  border-radius: .25rem;
  padding: .2rem .4rem;
  border: 0;
  font-weight: 900;
  margin-right: .25rem;
`;

export const HeaderNavigationButtonsEntry = styled.button`
  background-color:#fff;
  color:  #1a1e3a;
  border-radius: .25rem;
  padding: .2rem .8rem;
  border: 0;
  font-weight: 900;
`;

export const HeaderNavigationButton = styled.a`
  background-color: #f2be17;
  text-align:center;
  color:  #1a1e3a;
  border-radius: .25rem;
  padding: .2rem .4rem;
  border: 0;
  font-size: 1rem;
  font-weight: 900;
`;
