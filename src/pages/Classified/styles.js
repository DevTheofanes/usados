import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 62rem;
  display: grid;
  margin-top: 2rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a:hover {
    color: var(--greyFord);
  }
`;
export const ContentHeaderBack = styled.a`
  display: flex;
  align-items: center;

  border: 0;
  background-color: transparent;

  text-decoration: none;
  color: var(--darkCharcoal);
  font-size: 1rem;

  svg {
    margin-right: 0.25rem;
  }
`;

export const ContentHeaderLinksShopkeeper = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
  }
`;

export const ContentHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const ContentHeaderButton = styled.a`
  background-color: #1a1e3a;
  height: 2rem;
  color: #fff;

  padding: 0 0.5rem;
  border: 0;

  display: flex;
  align-items: center;

  svg {
    margin-left: 0.25rem;
  }
`;

export const ContentClassified = styled.div`
  padding: 20px;
  margin-top: 2rem;
  background-color: #f4f4f4;
`;

export const ClassifiedHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const ClassifiedHeaderTitle = styled.strong`
  font-size: 28px;
  color: var(--primaryColor);
`;

export const ClassifiedHeaderSubtitle = styled.span`
  color: var(--greyFord);
`;

export const Classified = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const ContentClassifiedImages = styled.div`
  /* display:flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const ContentClassifiedImage = styled.div`
  position: relative;
  /* background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% center; */
  span {
    height: 120%;
    width: 120%;
    transform: translate(-32px, -32px);
  }
  img {
    width: 100%;
    max-height: 402px;
    object-fit: contain;
    user-select: none;
    top: 50%;
  }

  .backgroundImage {
    height: 120%;
    width: 120%;
    position: absolute;
    filter: blur(32px);
  }
  /* max-height: 402px; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* max-width: 402px; */
  /* height: 34.55rem; */
`;

export const ContentClassifiedOthersImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    width: 12.4rem;
    height: 13.66rem;
  }
`;

export const ClassifiedsBox = styled.div`
  background-color: #f4f4f4;
  margin-bottom: 2rem;
`;

export const ClassifiedsContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`;

export const ClassifiedsContentImage = styled.div`
  max-height: 17.375rem;

  img {
    width: 17.375rem;
    height: 17.375rem;
  }
`;

export const ClassifiedsContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteFord);
  padding-left: 40px;
  padding-right: 20px;

  h4 {
    margin-top: 20px;
    font-size: 24px;
    color: var(--primaryColor);
  }

  h5 {
    margin-top: 20px;
    font-size: 16px;
    color: var(--primaryColor);
  }

  p {
    margin-top: 8px;
    font-size: 14px;
  }
`;

export const ClassifiedsContentIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.275rem;
`;

export const ClassifiedsContentInfoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.275rem;

  margin-top: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  p {
    max-width: 60%;
    text-align: justify;
    font-size: 0.9rem;
    max-height: 5rem;
  }

  span {
    text-align: right;
  }

  strong {
    text-align: right;
  }
`;

export const ClassifiedsContentDescription = styled.div`
  text-align: justify;
  padding: 1.275rem;
  margin: 1.8rem auto;
  max-height: 16rem;
  overflow: hidden;
  text-overflow: Ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 11;
  /* line-height: X;
   max-height: X*N; */
`;

export const ClassifiedsContentFooter = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;
  text-align: center;
`;

export const ContentClassifiedPayment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  margin-top: 2rem;
`;

export const ClassifiedPaymentContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0.5rem 0;
  }
`;

export const ClassifiedPaymentWhatsapp = styled.a`
  height: 2rem;
  background-color: #008d36;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: 500;
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  z-index: 2;
  margin: 0 20px;
  background-color: transparent;
`;

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
  margin-top: -.5rem;
  margin-left: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
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

export const WhatsappLink = styled.a`
  /* background-color: var(--green); */
  /* background-color: #008D36; */
  /* background-color: #A8E5D5;
  background-color: #ecfff4; */

  height: 48px;
  color: var(--white);
  color: #008d36;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 6px;
  }
  border: 1.65px solid #008d36;
`;

export const ProfileLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 8px 0 20px;

  a {
    color: var(--primaryColor);
    font-size: 14px;
    font-weight: bold;
  }
`;
