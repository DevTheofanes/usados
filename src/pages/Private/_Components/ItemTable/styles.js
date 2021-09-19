import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  align-items: center;

  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
  margin-top: 2rem;

  p{
    margin-left: .75rem;
    color: #616160;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
`;

export const Thumbnail = styled.img`
  width: 9.6rem;
  height: 6rem;
  border-radius: .75rem;
  margin-right: .75rem;
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span{
    font-weight: 400;
    font-size: .8rem;
    color: #616160;
  }

  strong{
    font-weight: 600;
    font-size: .8rem;
    color: #444;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
`;

export const ButtonEdit = styled.a`
  border: 0;
  background-color: #1a1e3a;
  color: #fff;
  border-radius: .25rem;
  padding: .25rem .5rem;
  
`;

export const ButtonDelete = styled.button`
  margin: 0 1rem;
  
  border: 0;
  background-color: #e30613;
  color: #fff;
  border-radius: .25rem;
  padding: .25rem .5rem;
`;

