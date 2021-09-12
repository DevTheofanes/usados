import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  position: relative;
`;


export const TopBarColor = styled.div`
  height: 4rem;
  width: 100%;
  background-color: #1a1e3a;
  `;

export const Content = styled.div`
    width: 100%;
    max-width: 62rem;
    display: grid;
    grid-template-columns: 2fr 7fr;
  `;

export const SideBar = styled.div`
  /* background: #888; */
`;

export const SideBarPerfilImage = styled.div`
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 190px;
  
  img{
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
  }
`;

export const Ratings = styled.div``;

export const RatingsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RatingsStars = styled.div`
  height: 3.2rem;
  display: flex;
  align-items: center;
`;

export const RatingsText = styled.div``;
