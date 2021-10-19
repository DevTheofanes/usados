import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;


export const Content = styled.div`
  margin-top: 10rem;

  margin: 0 auto;
  width: 100%;
  max-width: 62rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const ContentHeader = styled.div`
  margin: 2rem auto;
  font-weight: bold;
  font-size: 2rem;
`;

export const SignUpContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 5fr;
  gap: 2rem;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-self: flex-start; */
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  span{
    font-size: .7rem;
    margin-bottom: .5rem;
    color: #9d9b9c;
  }

  select{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }

  input{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }

  textarea{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;
    border-radius: .25rem;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }

  input[type="password"] {
    width: 50%;
  }
`;

export const FormInputBanner = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  span{
    font-size: .7rem;
    margin-bottom: .5rem;
    color: #9d9b9c;
  }

  input{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }

  input[type="file"] {
      display: none;
  }

  label{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;
    width: 100%;
    height: 8.6rem;
    border-radius: .25rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }


  textarea{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;
    border-radius: .25rem;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }
`;

export const FormInputPrimary = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  span{
    font-size: .7rem;
    margin-bottom: .5rem;
    color: #9d9b9c;
  }

  input{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }

  input[type="file"] {
      display: none;
  }

  label{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;
    /* width: 40%/; */
    height: 14rem;
    border-radius: .25rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }


  textarea{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;
    border-radius: .25rem;

    font-size: 1rem;
    color: #1a1e3a;
    padding: .5rem;
  }
`;

export const FormInputCheckBox = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  span{
    font-size: .7rem;
    color: #9d9b9c;
    margin-left: .25rem;
  }  

  input{
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const FormInputMoreImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const FormInputMoreImage = styled.div`
  input[type="file"] {
    display: none;
  }

  label{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;
    /* width: 40%/; */
    height: 8rem;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export const FormSubmit = styled.div` 
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormSubmitAcceptTerms = styled.div`
  display:flex;
  align-items: center;

  margin-top: 2rem;

  span{
    font-size: 1rem;
    color: #9d9b9c;
    margin-left: .25rem;
  }  

  input{
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const FormSubmitButton = styled.button`
  width: 8rem;
  height: 2rem;

  background-color: #4cd691;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.125rem;

  border: 0;
  margin-top: 1rem;
  border-radius: .5rem;

`;

//Modal

export const ModalContainer = styled.div`
  background-color: #FEFFFF;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* padding: 1.5rem; */
  color: #111;
  border-radius: 8px;
`;

export const ModalHeaderIcon = styled.div`
  display: flex;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-radius: 8px 8px 0 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 6rem;
  background: linear-gradient(45deg, #FFDA2F, #F7ED00);
`;

export const ModalContent = styled.div`
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

  .btnConfirm{
    background-color: #4cd691;
  }
`;

export const ModalButtonsContainer = styled.div`
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
