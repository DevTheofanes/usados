import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SignPage = styled.div`
  background-image: url(${props => props.backgroundImage ? props.backgroundImage : null});
  background-size: cover; 
  height: 52rem;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 10rem;

  max-width: 62rem;
  width: 62rem;

  display: grid;
  grid-template-columns: 1fr 2fr 4fr;
`;

export const ListAbout = styled.div`
  background-color: #1a1e3a;
  padding: 2rem;
  border-radius: 1rem;

  max-height: 36rem;
`;

export const ListItemAbout = styled.div`
  color: #fff;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg{
    margin-right: .5rem;
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.2rem;

  img{
    height: 7.2rem;
  }
`;


export const AboutInfos = styled.div`
  max-width: 62rem;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  /* gap: 2rem; */
  margin-top: 3.2rem;
`;

export const AboutInfosContainer= styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: space-between;
`;

export const AboutInfoItem = styled.div`
  margin-bottom: 2rem;
  width: 48%;
  h4{
    text-transform: uppercase;
    font-size: 1.5rem;
    color:  #1a1e3a;
    margin-bottom: .5rem;
  }
`;


export const HelpContainer = styled.div`
  width: 100%;
  background-color: #f2be17;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TipsContainer = styled.div`
  width: 100%;
  background-color: #1a1e3a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SellContainer = styled.div`
  width: 100%;
  background-color: #666;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PlansContainer = styled.div`
  width: 100%;
  /* background-color: #666; */
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoTitle = styled.div`
  width: 62rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  
  h4{
    font-size: 1.6rem;
    margin-left: .75rem;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4{
      margin: 0;
      margin-top: .75rem;
    }
  }
`;

export const InfoContainer = styled.div`
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;

export const InfosItens = styled.div`
  /* width: 62rem; */

  strong{
    font-size: 1.2rem;
  }

  p{
    margin-top: 1rem;
    margin-bottom: 6rem;
    font-size: .9rem;
  }
`;



export const Box = styled.div`
  background-color: #999;
  border-radius: 1rem;
  width: 62rem;
  height: 20rem;
`;