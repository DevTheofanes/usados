import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  position: relative;
`;


export const TopBarColor = styled.div`
  height: 4rem;
  width: 100%;
  background-color: #1a1e3a;
  `;

export const Content = styled.div`
    width: 100%;
    max-width: 62rem;
    display: grid;
    grid-template-columns: 2fr 7fr;
  `;

export const SideBar = styled.div`
  /* background: #888; */
  margin-right: 1rem;
`;

export const SideBarPerfilImage = styled.div`
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 180px;
  
  img{
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
  }

  h3{
    margin-top: 1rem;
    color: #1a1e3a;
    font-weight: 900;
    font-size: 1.5rem;
  }

  span{
    color: #1a1e3a;
    font-weight: 500;
    font-size: .8rem;
  }
`;

export const SideBarContent = styled.div`
  background-color: #F4F4F4;
  margin-top: 15rem;
  border-radius: .75rem;
  padding: 1.5rem 1rem;

  div+div{
    margin-top: 1.5rem;
  }
`;

export const SideBarInfo = styled.div`
  display: flex;
  flex-direction: column;

  p{
    text-align: justify;
    font-size: 0.8rem;
    margin-top:.25rem;
  }
`;

export const SideBarInfoTitle = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  svg{
    margin-right: 0.25rem;
  }
`;

export const SideBarPublicity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: .75rem;
  margin-top: 1rem;
  height: 33.6rem;
  background-color: #F4F4F4;
`;

//Profile

export const Profile = styled.div``;

export const ProfileHeader = styled.div``;

export const ProfileHeaderBanner = styled.div`
  position: absolute;
  top: 180px;

  img{
    height: 18rem;
    width: 48.221875rem;
  }
`;

export const ProfileHeaderBar = styled.div`
  margin-top: 15rem;

  display: grid;
  grid-template-columns: 5fr 2fr;
  align-items: center;
`;

export const ProfileHeaderBarInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileHeaderBarInfosIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color:  #1a1e3a;

  display:flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileHeaderBarInfosText = styled.div`
  text-align:center;
`;    

export const ProfileHeaderBarInfosLikes = styled.div`
  display: flex;
  align-items: center;
  
  div{
    margin-right: 1rem;
  }
`;

export const ProfileHeaderBarInfosDetails = styled.div`
  display: flex;
  align-items: center;

  div{
    margin-left: 1rem;
  }
`;

export const ProfileHeaderRatings = styled.div`
  display: flex;
  justify-self: end;
`;

export const ProfileHeaderRatingsContent = styled.div`
  background-color:  #1a1e3a;
  padding: .75rem;
  border-radius: .5rem;
`;

export const ProfileList = styled.div`
  max-height: 60rem;
  overflow: auto;
  margin-top: 2rem;
  padding-right: 1rem;
  
`;

export const ProfileItem = styled.div`
  padding: 1.5rem;
  background-color: #F4F4F4;
  margin-bottom: 2rem;

  p{
    margin: 2rem 0;
  }
`;

export const ProfileImages = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  height: 24rem;

  img{
    width: 28rem;
    width: 100%;
    height: 24rem;
  }

  div{
    display: grid;
    img{
      margin:  0;
      padding: 0;
      height: 12rem;
    }
  }
`;

export const ProfileItemLikes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: end;
  color:  #1a1e3a;

  strong{
    width: 98%;
    text-align:end;
  }
  div{
    margin-left: 1rem;
  }
`;

