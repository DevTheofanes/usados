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
  font-size: .8rem;
`;

export const ButtonDelete = styled.button`
  margin: 0 1rem;
  
  border: 0;
  background-color: #e30613;
  color: #fff;
  border-radius: .25rem;
  padding: .25rem .5rem;

  font-size: .8rem;

`;


export const ModalConfirmDeleteContainer = styled.div`
  background-color: #FEFFFF;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* padding: 1.5rem; */
  color: #111;
  border-radius: 8px;
`;

export const ModalConfirmDeleteButtonsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  button{
    border: 0;
    background-color: #1a1e3a;
    color: #fff;
    font-weight: 500;
    font-size: .8rem;
    height: 1.8rem;
    /* letter-spacing: .6px; */
    width: 4.2rem;
    border-radius: .25rem;
  }
`;

export const ModalConfirmDeleteHeaderIcon = styled.div`
  display: flex;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-radius: 8px 8px 0 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 6rem;
  background: linear-gradient(45deg, #D0342C, #CC3333);
`;

export const ConfirmDeleteContent = styled.div`
  padding: 1.5rem;
  max-width: 20rem;

  p{
    font-size: .8rem;
    text-align: center;
  }

  h4{
    margin-top: .8rem;
    font-size: .92rem;
    text-align: center;
  }

  .btnDelete{
    background-color: #D0342C;
  }
`;