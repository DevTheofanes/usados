import styled from 'styled-components';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  padding: 1.5rem;

  border-radius: .25rem;

  img {
    width: 15rem;
    height: 15rem;
    border: 1px solid var(--primaryColor);
  }
`;

export const SideBarContent = styled.div`
  background-color: #fff;
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
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }

  a {
    color:var(--black);
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

export const ProfileInfos = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  .ProfileLink {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
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
