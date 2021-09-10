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
  grid-template-columns: 2fr 5fr;

  margin-top: 2rem;
`;

export const SideBand = styled.div`
`;

export const ContentClassifieds = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
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
  padding: 1.275rem;
  max-height: 17.375rem;
`;

export const ClassifiedsContentIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClassifiedsContentInfoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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


export const ClassifiedsLinks = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export const ClassifiedsLinksSeePhotos = styled.div`
  height: 2rem;
  background-color: #1a1e3a;

  display: flex;
  align-items: center;

  padding-left: 8%;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    /* font-size: 1.2rem; */
  }
`;

export const ClassifiedsLinksWhatsapp = styled.div`
  height: 2rem;
  background-color: #008D36;

  display: flex;
  align-items: center;
  justify-content: center;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    /* font-size: 1.2rem; */
  }
`;

export const ClassifiedsPagesButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  width: 50%;
`;

export const ClassifiedsPagesButton = styled.div`
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

export const ClassifiedsPagesQuantity = styled.div`
  background-color: #1a1e3a;
  color: #fff;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  padding: 0 .5rem;
`;

export const SideBandFilters = styled.div`
  background:  #F4F4F4;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const FiltersTitle = styled.div`
  display: flex;
  align-items: center;
  
  h3{
    color: #1a1e3a;
    margin-left: .5rem;
  }
`;

export const FiltersItem = styled.div`
  margin-top: .75rem;
  display: flex;
  flex-direction: column;

  span{
    margin-bottom: .45rem;
  }

  select{
    border: 0;
    background-color: transparent;
  }
`;

export const SideBandPublicity = styled.div`
  background:  #F4F4F4;
  display:flex;
  align-items: center;
  justify-content: center;

  height: 43.81rem;
  margin-top: 2rem;

  span{
    color: #888;
  }
`;
