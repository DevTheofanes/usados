import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SignPage = styled.div`
  background-image: url(${(props) => (props.backgroundImage ? props.backgroundImage : null)});
  background-size: cover;
  height: 52rem;
  width: 100%;
  z-index: 0;

  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
`;

export const Content = styled.div`
  margin-top: 10rem;
`;

export const Form = styled.div`
  background-color: #fff;
  width: 25.2rem;
  border-radius: .5rem;
  z-index: 1;
`;

export const FormOptionButton = styled.button`
  background-color: ${(props) => (props.active ? '#fff' : '#e9e8e8')};
  border: 0;
  margin: 1rem 0;

  width: 100%;
  height: 3rem;

  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`;

export const FormInput = styled.div`
  width: 86%;
  background-color: #e9e8e8;
  margin: .75rem auto 0;
  height: 2.6rem;
  display: flex;
  align-items: center;

  svg{
    margin: 0 .75rem;
  }

  input{
    width: 80%;
    background-color: transparent;
    border: 0;
    font-size: 1.025rem;
  }
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
  margin-bottom: 2rem;
  text-decoration: none !important;
`;

export const FormConfigs = styled.div`
  width: 86%;
  margin: 1.5rem auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    text-decoration: underline;
    color: #1a1e3a;
  }

  .btn-Highlight:hover{
    border: 0;
    background-color: var(--primaryColor);
    color: white;
  }

  .btn:hover {
    background-color: #101221;
  }

  a{
    font-size: .825rem;
    font-style: none;
  }
`;

export const FormConfigsButton = styled.div`
  display: flex;
  align-items: center;

  input{
    margin-right: .25rem;
    font-size: .825rem;
  }

  label{
    font-weight: 700;
    font-size: .825rem;
  }
`;

export const ContentImage = styled.div`
  margin-top: 2rem;

  img{
    width: 25.2rem;
  }
`;
