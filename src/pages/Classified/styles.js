import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 62rem;
  display: grid;
  margin-top: 2rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentHeaderLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentHeaderBack = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  background-color: transparent;

  a{
    text-decoration: none;
    color: #333;
    font-size:1rem;
  }

  svg{
    margin-right: .25rem;
  }
`;

export const ContentHeaderLinksShopkeeper = styled.div`
  display: flex;
  align-items: center;

  a{
    text-decoration: none;
    color: #333;
    font-size:1rem;
  }
`;

export const ContentHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const ContentHeaderButton = styled.button`
  background-color: #1a1e3a;
  height: 2rem;
  color: #fff;

  padding: 0 .5rem;
  border: 0;

  display:flex;
  align-items: center;

  svg{
    margin-left: .25rem;
  }
`;

export const ContentClassified = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 2rem;
`;

export const ContentClassifiedImages = styled.div`
  display:flex;
  flex-direction: column;
`;

export const ContentClassifiedImagePrimary = styled.div`
  img{
    width: 37.2rem;
    height: 34.55rem;
  }
  height: 34.55rem;
`;

export const ContentClassifiedOthersImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img{
    width: 12.4rem;
    height: 13.66rem;
  }
`;


export const ClassifiedsBox = styled.div`
  background-color: #F4F4F4;
  margin-bottom: 2rem;
`;

export const ClassifiedsContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;

`;

export const ClassifiedsContentImage = styled.div`
  max-height: 17.375rem;

  img{
    width: 17.375rem;
    height: 17.375rem;
  }
`;

export const ClassifiedsContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F4F4F4;
`;

export const ClassifiedsContentIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.275rem;
`;

export const ClassifiedsContentInfoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.275rem;

  margin-top: 1rem;

  h1{
    font-size: 1.5rem;
  }

  p{
    max-width: 60%;
    text-align: justify;
    font-size: .9rem;
    max-height: 5rem;
  }

  span{
    text-align: right
  }

  strong{
    text-align: right
  }
`; 

export const ClassifiedsContentDescription = styled.div`
  text-align: justify;
  padding: 1.275rem;
  margin: 1.8rem auto;
  max-height: 16rem;
  overflow: hidden;
   text-overflow: Ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 11; 
   /* line-height: X;        
   max-height: X*N; */
`;

export const ClassifiedsContentFooter = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;
  text-align:center;
`;

export const ContentClassifiedPayment = styled.div`
  display:flex;
  width: 100%;
  flex-direction: column;

  margin-top:2rem;
`;

export const ClassifiedPaymentContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  display:flex;
  flex-direction: column;

  h2{
    margin: .5rem 0;
  }
`;

export const ClassifiedPaymentWhatsapp = styled.div`
  height: 2rem;
  background-color: #008D36;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: 500;
`;
