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
  margin-right: 1rem;
`;

export const SideBarPerfilImage = styled.div`
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 180px;
  
  img{
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
  }

  h3{
    margin-top: 1rem;
    color: #1a1e3a;
    font-weight: 900;
    font-size: 1.5rem;
  }

  span{
    color: #1a1e3a;
    font-weight: 500;
    font-size: .8rem;
  }
`;

export const SideBarContent = styled.div`
  background-color: #F4F4F4;
  margin-top: 15rem;
  border-radius: .75rem;
  padding: 1.5rem 1rem;
  height: 28rem;

  div+div{
    margin-top: 1.5rem;
  }
`;

export const SideBarInfo = styled.div`
  display: flex;
  flex-direction: column;

  p{
    text-align: justify;
    font-size: 0.8rem;
    margin-top:.25rem;
  }
`;

export const SideBarInfoTitle = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  svg{
    margin-right: 0.25rem;
  }
`;

export const Ratings = styled.div`
  margin-left: 1rem;
`;

export const RatingsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RatingsStarsBox = styled.div`
  padding: 0 .5rem .5rem .5rem; 
  background-color: #1a1e3a;
  border-end-end-radius: .5rem;
  border-end-start-radius: .5rem;
`
;

export const RatingsStars = styled.div`
  height: 3.2rem;
  display: flex;
  align-items: center;
  background-color: #fff;

  border-radius: 0.5rem;
  /* border-end-end-radius: .5rem;
  border-end-start-radius: .5rem; */
  padding: 0 1rem;
`;

export const RatingsLinks = styled.div`
  display: flex;
  align-items: center;
  a{
    color: #1a1e3a;
    text-decoration: none;
    font-size: 1rem;
  }
`;


export const RatingsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  margin-top: 3.8rem;
`;

export const RatingItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #F4F4F4;
  padding: 1rem;
  border-radius: .5rem;

  p{
    margin-top: 1rem;
    font-size: .8rem;
    text-align: justify;
    /* height: 8rem; */

    max-width: 12.375rem;

    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 10; // Quantidade de linhas
    -webkit-box-orient: vertical; 
  }

  label{
    font-size: .8rem;
    font-style: italic;
    margin-top: 1rem;
    padding: 0 .85rem;
    text-align:center;
  }

  span{
    margin-top: 1rem;
    font-size: .8rem;
  }
`;

export const RatingItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RatingItemHeaderAvatar = styled.div`
  img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    
  }
`;

export const RatingItemUserInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-left: 5px;
`;

export const RatingItemUserInfosContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: .5rem;

  strong{
    text-align:center;
  }
`;
