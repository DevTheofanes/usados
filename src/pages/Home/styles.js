import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

// Lobby

// SearchSpace

export const SearchSpace = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 62rem;
`;

export const SearchHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #858585;


  strong{
    text-transform: uppercase;
    font-size: 1.8rem;
    padding-bottom: .25rem;
    color: #343434;
  }
`;

export const SearchHeaderItens = styled.div`
  display: flex;
  align-items: center;

  span{
    margin-right: .5rem;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: #9a9999;
  }

  span + span {
    margin-left: .5rem;
  }
`;

export const SearchGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.2rem;
`;

export const SearchItem = styled.a`
  display:flex;
  flex-direction: column;
  align-items: center;

  color: #343434;

  strong{
    padding: .25rem 0 .1225rem;
    font-weight: 900;
    margin: 0.25rem 0;

    /* border-bottom: 1px solid #f0bc2c; */
  }

  span{
    color: #666;
    width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const SearchItemImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13rem;
  box-sizing: border-box !important;
  /* background-color: var(--grayD); */
  img{
    width: auto;
    width: 14rem;
    /* height: 13rem; */
    height: auto;
    max-height: 13rem !important;
  }
`;

export const SearchBorder = styled.div`
  width: 1.5rem;
  margin: 0 auto .5rem;
  border-bottom: 1px solid #858585;
`;

// Info Content

export const InfoContent = styled.a`
  display: flex;
  width: 100%;
  max-width: 62rem;
  align-items: center;
  flex-direction: column;
`;

export const InfoContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #858585;

  margin-top: 2rem;

  strong{
    text-transform: uppercase;
    font-size: 1.8rem;
    padding-bottom: .25rem;
    color: #343434;
  }
`;

export const InfoContentDuoImages = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin: 2rem auto;
  width: 100%;
  img{
    width: 100%;
    height: 12.5rem;
  }
`;

export const InfoContentUnicImage = styled.img`
  width: 100%;
  height: 12.5rem;
`;

// Shop

export const Shop = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 4fr 6fr;
`;

export const ShopInfos = styled.div`
  background-image: url(${(props) => (props.background ? props.background : null)});
  max-height: 25.5rem;

  padding: 5rem 8rem;

  h6{
    color: #f0bc2c;
    font-weight: normal;
    font-size: 2rem;
  }

  p{
    margin-top: .5rem;
    max-width: 27rem;
    color: #777;
    font-size: .8rem;
  }
`;

export const ShopInfosBottom = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  img{
    width: 8rem;
  }

  div{
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong{
      font-size: 1.6rem;
      color: #52b95b;
    }

    span{
      color: #777;
      font-size: .8rem;
    }
  }
`;

// Official Stores

export const OfficialStore = styled.div`
  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 10rem;
`;

export const OfficialStoreHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #c1c1c1;

  strong{
    text-transform: uppercase;
    font-size: 1.8rem;
    border-bottom: 1.8px solid #52b95b;
  }
`;

export const OfficialStoreHeaderItens = styled.div`
  display: flex;
  align-items: center;
`;

export const OfficialStoreGrid = styled.div`
  margin-top: 2.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
`;

export const OfficialStoreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom:${(props) => (props.firstLine ? '1px solid #c1c1c1' : null)} ;
  padding-bottom: 2rem;

  strong{
    text-transform: uppercase;
    font-weight: 900;
  }

  span{
    text-transform: uppercase;
    color: #f0bc2c;
    font-weight: 600;
    font-size: 0.7rem;
  }
`;

// OthersServices

export const OthersServices = styled.div`
  background-image: url(${(props) => (props.background ? props.background : null)});
  background-size: cover;
  width: 100%;
  padding: 6rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OthersServicesTitle = styled.div`
  border-bottom: 1px solid #c1c1c1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  strong{
    border-bottom: 1.6px solid #52b95b;
    align-items:center;
    font-size: 1.6rem;
  }
`;

export const OthersServicesGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const OthersServicesItem = styled.div`
  width: 12rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  svg{
    margin: 1rem 0;
    border: 1px solid #52b95b;
    padding: .5rem;
  }

  strong{
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 1px solid  #f0bc2c;
  }

  span{
    font-size: 0.9rem;
  }
`;

// Footer

export const Footer = styled.div`
  width: 100%;
  background-color: #292d2f;
  padding: 4rem 10rem;
  color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`;

export const FooterInfo = styled.div`
  img{
    width: 12rem;
  }

  p{
    color: #888;
    font-size: .8rem;
    max-width: 24rem;

    margin-bottom: 2rem;
  }
`;

export const FooterInfoContact = styled.div`
  display: flex;
  align-items: center;

  margin-top: .5rem;
  span{
    margin-left: .5rem;
    color: #888;
    font-size: .8rem;
  }
`;

export const FooterAdditional = styled.div`
  display: flex;
  flex-direction: column;

  strong{
    padding-left: .75rem;
    text-transform: uppercase;
    border-left: 1.6px solid #52b95b;
  }

  div{
    padding-top: 2rem;
    border-left: 1px solid #888;
    display: flex;
    flex-direction: column;
  }

  span{
    padding-left: .75rem;
    color: #888;
    font-size: .8rem;
    padding-bottom: 0.5rem;
  }
`;

export const FooterVip = styled.div`
  display: flex;
  flex-direction: column;

  div{
    padding-top: 2rem;
    border-left: 1px solid #888;
    display: flex;
    flex-direction: column;
  }

  strong{
    padding-left: .75rem;
    text-transform: uppercase;
    border-left: 1.6px solid #52b95b;
  }

  span{
    padding-left: .75rem;
    color: #888;
    font-size: .8rem;
  }

  input{
    margin-left:.75rem;
    margin-top: .5rem;
    background-color: #3b3e41;
    border: 1px solid #888;
    padding: .25rem .4rem;
  }

  button{
    margin-left:.75rem;
    margin-top: .5rem;
    color: #fff;
    background-color: #f89c40;
    border: 0px;
    border-radius: 0;
    padding: .25rem .4rem;
  }
`;

export const FooterBar = styled.div`
  width: 100%;
  background-color: #2d3134;
  display: flex;
  justify-content: center;
  padding: .75rem;

  span{
    font-size: .8rem;
    color: #888;
  }

  strong{
    color: #52b95b;
  }
`;
