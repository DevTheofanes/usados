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

export const FormContainer = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 4fr 5fr;
  gap: 2rem;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;

  span{
    font-size: .7rem;
    margin-bottom: .5rem;
    color: #9d9b9c;
  }
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

  input{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;

    font-size: .9rem;
    color: #1a1e3a;
    padding: .5rem;
    height: 2rem;
  }

  select{
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

export const FormInputImage = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  span{
    font-size: .7rem;
    margin-bottom: .5rem;
    color: #9d9b9c;
  }

  input[type="file"] {
      display: none;
  }

  label{
    width: 10rem;
    opacity: .9;
    height: 2rem;
    background-color: var(--primaryColor);
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--white);
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

export const FormSubmitButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  width: 17rem;

  a{
    width: 8rem;
    height: 2rem;
    border: 1px solid var(--primaryColor);
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--primaryColor);
  }

  a:hover{
    background-color: var(--primaryColor);
    color: var(--white);
  }

  button {
    width: 8rem;
    height: 2rem;
    background-color: var(--primaryColor);
    border: 0;
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--white);
  }
`;
