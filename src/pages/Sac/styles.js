import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Page = styled.div`
  background-image: url(${(props) => (props.backgroundImage ? props.backgroundImage : null)});
  background-position-x: center;
  background-size: 500rem auto;
  max-height: 46rem;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 6rem;

  max-width: 62rem;
  width: 62rem;
  border-radius: 1rem;
  background-color: #1a1e3a;

  padding: 2rem;
  color: #fff;

  margin-bottom: 3rem;
`;

export const ContentSac = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
`;

export const ContentColumn = styled.div`
  p{
    font-weight: 700;
    font-size: 1rem;
    font-style: italic;
  }
`;

export const SacTitle = styled.div`
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-style: italic;

  /* width: 40%; */
`;

export const SacSubTitle = styled.div`
  margin-top: 3.6rem;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 900;
  font-style: italic;
`;

export const SacQuest = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;

  span{
    font-weight: 100;
    font-style: italic;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 2rem auto;

  p{
    text-align: center;
    margin-top: .5rem;
  }
`;
