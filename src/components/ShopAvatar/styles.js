import styled from 'styled-components';

export const ClassifiedShop = styled.a`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--primaryColor);
  }
`;

export const ShopInfos = styled.div`
  margin-top: -0.5rem;
  margin-left: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: var(--darkCharcoal);
    font-size: 0.7rem;
    font-weight: normal;
    height: auto;
    max-height: 2rem !important;
  }

  strong {
    color: var(--primaryColor);
  }

  span {
    font-size: 12px;
    color: var(--primaryColor);
  }

  small {
    color: var(--whiteFord);
    display: flex;
    align-items: center;
    background-color: var(--yellow);
    background-color: var(--primaryColor);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    color: var(--whiteFord);

    svg {
      margin-right: 0.25rem;
      color: var(--yellow);
    }
  }
`;
