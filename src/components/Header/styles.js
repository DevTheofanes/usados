import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  background-color: #1a1e3a;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  width: 100%;
  max-width: 62rem;

  position:relative;
`;

export const HeaderNavigation = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4.4fr 5.2fr 1.4fr;
  align-items: center;
`;

export const HeaderNavigationLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  width: 12rem;
  height: 2.8rem;
  margin: 1.8rem 0;
`;

export const HeaderNavigationLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;

  a{
    text-decoration: none;
    color: #fff;
    margin: 0 1rem;
    font-weight: bold;
  }
`;


export const HeaderNavigationButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderNavigationButtonsAnnounce = styled.button`
  background-color: #f2be17;
  color:  #1a1e3a;
  border-radius: .25rem;
  padding: .2rem .4rem;
  border: 0;
  font-weight: 900;
  margin-right: .25rem;
`;

export const HeaderNavigationButtonsEntry = styled.button`
  background-color:#fff;
  color:  #1a1e3a;
  border-radius: .25rem;
  padding: .2rem .8rem;
  border: 0;
  font-weight: 900;
`;

export const HeaderSearch = styled.div`
  display:flex;
  align-items: center;

  background-color: #fff;
  padding: .5rem;
  width: 100%;
  margin-bottom: 6.4rem;
`;

export const HeaderSearchSelect = styled.select`
  border: 0;
  width: 18%;

  color: #676767;
  padding: .25rem .5rem;
`;

export const HeaderSearchInput = styled.div`
  width: 82%;

  box-sizing: border-box;
  border-left: 1px solid #676767;
  margin-left: 1rem;

  input{
    border: 0;
    width: 95%;
    margin-left: 1rem;
    color: #676767;
  }
`;


export const HeaderMenuCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${props => props.background ? props.background : null});
  
  position:absolute;
  top: 170px;
`;

export const HeaderMenuCategoryItem = styled.div`
  padding: 1.6rem 2rem;
  max-height: 8.4rem;
  max-width: 8.85rem;
  height: 8.4rem;
  width: 8.85rem;
  background-color: ${props => props.color ? props.color : "#fff"};
`;


export const CentralAttendanceHeader = styled.div`
  width: 400px;

  display: flex;
`;

// export const Logo = styled.img`
//   width: 120px;
// `;

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