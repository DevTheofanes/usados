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

  select{
    background-color: #f3f3f3;
    opacity: .9;
    border: 1px solid #a3a3a2;

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

export const FormSubmit = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  margin: 2rem 0;

  .btn-Highlight:hover{
    border: 0;
    background-color: var(--primaryColor);
    color: white;
  }

  .btn:hover {
    background-color: #101221;
  }
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

  .btn-Highlight:hover{
    border: 0;
    background-color: var(--primaryColor);
    color: white;
  }

  .btn:hover {
    background-color: #101221;
  }
`;

export const FormButtonHighLight = styled.a`
  background-color: var(--white);
  display: flex;
  height: 2.8rem;
  align-items: center;
  justify-content: center;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);
  width: 100%;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: .5rem;
  width: 10rem;
  margin-right: 2rem;
  font-size: .8rem;
`;

export const FormButton = styled.button`
  background-color: #1a1e3a;
  display: flex;
  height: 2.8rem;
  align-items: center;
  justify-content: center;
  color:#fff;
  width: 100%;
  border:0;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: .5rem;
  width: 10rem;
  margin-bottom: 2rem;
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
