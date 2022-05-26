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

export const SideBand = styled.div``;

export const ContentClassifieds = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const ClassifiedsBox = styled.div`
  background-color: var(--background);
  margin-bottom: 2rem;
  border-radius: 0.5rem;
`;

export const ClassifiedsContent = styled.a`
  display: grid;
  grid-template-columns: 2fr 5fr;
  color: #1a1e3a;
`;

export const ClassifiedsContentImage = styled.div`
  max-height: 17.375rem;

  img {
    border-radius: 0.5rem 0 0 0;
    width: 17.375rem;
    height: 17.375rem;
    /* object-fit: contain; */
  }
`;

export const ClassifiedsContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.275rem;
  max-height: 17.375rem;

  h2 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;

    display: flex;
    justify-content: flex-end;
  }

  p {
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    height: 7.5rem;
    max-height: 7.5rem;
  }
`;

export const ClassifiedsContentIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClassifiedsContentInfoLine = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: space-between; */

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    span {
      color: var(--darkCharcoal);
      font-size: 0.8rem;
      font-weight: normal;
    }
  }

  p {
    /* max-width: 60%; */
    text-align: justify;
    font-size: 0.9rem;
    max-height: 5rem;
  }

  span {
    text-align: right;
  }

  strong {
    text-align: right;
  }
`;

export const ClassifiedsLinks = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export const ClassifiedsLinksSeePhotos = styled.a`
  height: 2rem;
  background-color: #1a1e3a;

  display: flex;
  align-items: center;

  padding-left: 12%;
  border-radius: 0 0 0 0.5rem;

  text-decoration: none;
  color: #fff;
  font-weight: 500;
`;

export const ClassifiedsLinksWhatsapp = styled.a`
  height: 2rem;
  background-color: #008d36;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #fff;
  font-weight: 500;

  border-radius: 0 0 0.5rem 0;
`;

export const ClassifiedsPagesButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  width: 50%;
`;

export const ClassifiedsPagesButton = styled.button`
  background-color: #1a1e3a;
  color: #fff;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 0.25rem;
  padding: 0 0.5rem;

  svg {
    margin: 0 0.25rem;
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
  padding: 0 0.5rem;
`;

export const SideBandFilters = styled.div`
  background: #f4f4f4;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const FiltersTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: #1a1e3a;
    margin-left: 0.5rem;
  }
`;

export const FiltersItem = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.45rem;
  }

  select {
    border: 0;
    background-color: transparent;
  }
`;

export const SideBandPublicity = styled.div`
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 43.81rem;
  margin-top: 2rem;

  span {
    color: #888;
  }
`;
