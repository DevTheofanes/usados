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

export const FormInputProfile = styled.div`
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
    width: 40%;
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