import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

export const ProfileHeaderBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62rem;
  margin: -8rem auto 0;

  img {
    height: 16rem;
    width: 100%;
    z-index: 3;
  }
`;

export const Content = styled.div`
  width: 62rem;
  margin-top: 4rem;
  /* background-color: var(--background); */

  display: grid;
  grid-template-columns: 4fr 12fr;
  gap: 2rem;
  /* padding-left: 2rem; */
`;

export const HeaderBar = styled.div`
  display: flex;

  border-radius: 0 0 .5rem .5rem;
  width: 100%;
  max-width: 62rem;
  padding: 0 3.2rem;

  .profile {
    margin-top: -7rem;
  }

  img {
    /* position: absolute; */
    width: 14rem;
    height: 14rem;
    /* border-radius: 50%; */
    border: 1px solid var(--primaryColor);
    z-index: 10;
  }

  div + div {
    margin-left: 2rem;
    /* background-color: var(--background); */
  }

  h3 {
    margin-top: 1rem;
    color: #1a1e3a;
    font-weight: 900;
    font-size: 1.5rem;
  }

  span {
    color: #1a1e3a;
    font-weight: 500;
    font-size: 0.8rem;
  }

  a {
    color: #1a1e3a;
  }
`;

export const SideBar = styled.div`
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  padding: 1.5rem;

  border-radius: .5rem;

  img {
    /* position: absolute; */
    /* width: 14rem;
    height: 14rem; */
    width: 15rem;
    height: 15rem;
    /* border-radius: 50%; */
    border: 1px solid var(--primaryColor);
    z-index: 10;
  }
`;

export const SideBarPerfilImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const SideBarContent = styled.div`
  background-color: #fff;
  margin-top: 17.5rem;
  margin-top: 2rem;
  border-radius: 0.75rem;
  padding: 1.5rem 1rem;

  div + div {
    margin-top: 1.5rem;
  }

  .firstDiv{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const SideBarInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    /* text-align: justify; */
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
`;

export const SideBarRatingsContainer = styled.div`
  /* margin-top: .25rem; */
`;

export const ButtonRating = styled.a`
  border: 0;
  border-radius: 0.25rem;
  /* background-color: #f4f6ff; */
  background-color: var(--primaryColor);
  /* padding: .5rem 1rem; */
  height: 2.4rem;

  color: var(--white) !important;
  font-weight: 500;
  font-size: .8rem !important;
  margin-top: 1rem !important;

  /* width: 12rem; */

  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-self: end; */

  /* margin: 1rem auto 1rem; */
`;

export const SideBarInfoTitle = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  svg {
    margin-right: 0.25rem;
  }
`;

export const SideBarPublicity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.75rem;
  margin-top: 1rem;
  height: 33.6rem;
  width: 100%;
  background-color: #f4f4f4;
`;

export const SideBarIcons = styled.div`
  display: flex;
  align-items: center;
  width: 58%;
  justify-content: space-between;
`;

export const SideBarInfosIcon = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: #1a1e3a;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0 !important;
`;

// Profile

export const Profile = styled.div``;

export const ProfileHeader = styled.div``;

export const ProfileHeaderBarInfosIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #1a1e3a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileHeaderBar = styled.div`
  margin-top: 15rem;

  display: grid;
  grid-template-columns: 5fr 2fr;
  align-items: center;
`;

export const ProfileHeaderRatings = styled.div`
  display: flex;
  justify-self: start;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
    font-weight: normal;
  }
`;

export const ProfileHeaderButton = styled.button`
  border: 0;
  border-radius: 0.5rem;
  background-color: #1a1e3a;
  padding: 1rem;

  color: #fff;
  font-weight: bold;

  max-width: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
`;

export const ProfileHeaderRatingsContent = styled.div`
  background-color: #1a1e3a;
  padding: 0.75rem;
  border-radius: 0.5rem;
`;

export const ProfileList = styled.div`
`;

export const ProfileInfos = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
  }

  span {
    font-size: .8rem;
  }

  a {
    text-align: center;
    color: var(--primaryColor);
    font-size: .9rem;
    margin-top: .5rem;
  }
`;

export const ProfileItem = styled.div`
  padding: 1.5rem;
  background-color: var(--background);
  margin-bottom: 2rem;

  p {
    margin: 2rem 0;
  }

  border-radius: 0.5rem;

  h5 {
    color: var(--primaryColor);
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ProfileAvatar = styled.a`
  display: flex;
  margin-bottom: 1rem;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--primaryColor);
  }
`;

export const ShopInfos = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5px;
  margin-left: 12px;

  strong {
    color: var(--primaryColor);
  }

  span {
    font-size: 12px;
    color: var(--primaryColor);
  }
`;

export const ProfileImages = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  height: 24rem;

  img {
    width: 28rem;
    width: 100%;
    height: 24rem;
  }

  div {
    display: grid;
    img {
      margin: 0;
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
  color: #1a1e3a;

  strong {
    width: 98%;
    text-align: end;
  }
  div {
    margin-left: 1rem;
  }
`;
