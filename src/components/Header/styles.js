import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  padding: 2rem 10rem;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const CentralAttendanceHeader = styled.div`
  width: 400px;

  display: flex;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

export const CartHeader = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-end;

  strong{
    margin-left: 1rem;
    color: #ffa600;
  }

  svg + svg{
    margin-left: .5rem;
  }
`;

export const InfoPhones = styled.div`
  margin-left: 1rem;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export const SubHeader = styled.div`
  display: flex;
  padding: 2rem 10rem;
  width: 100%;

  justify-content: space-between;
`;

export const ButtonsPages = styled.div`
  display:flex;
  align-items: center;

  div + div{
    margin-left: 1rem;
  }
`;

export const PageOption = styled.div`
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: ${props => props.selected ? "bold" : "normal"};
  border-top: ${props => props.selected ? "2px solid #78a832" : "1px solid #fff"};
`;

export const InputBoxes = styled.div`
  border: 1px solid #666;
  padding: .25rem;

  display: flex;

  align-items: center;

  select{
    width: 8rem;
    border: none;
    border-right: 1px solid #666;
  }

  input{
    margin-left: 1rem;
    border: none;
  }
`;