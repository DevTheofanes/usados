import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerMain = styled.div`
  width: 100%;
  max-height: 402px;
  position: relative;

  .CarouselButton:hover {
    background-color: var(--whiteFord);
  }
`;

export const Content = styled.div`
  user-select: none;
  border-radius: 8px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  overflow: hidden;
  width: 100%;
  max-height: 402px;

  img {
    width: 100%;
    border-radius: 8px;
    max-height: 402px;
    object-fit: contain;
    user-select: none;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
  }

  div {
    border-radius: 8px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% center;
    filter: blur(32px);
    /* position: fixed; */
    height: 120%;
    width: 120%;
    transform: translate(-32px, -32px);
    height: 402px;
    width: 572px;
    /* top: 0; */
  }
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 46%;
  z-index: 2;
  margin: 0 20px;
  background-color: transparent;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselButtonCircles = styled.div`
  position: absolute;
  bottom: 4%;
  /* left: 50%;
  right: 50%; */
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CarouselButtonCircle = styled.div`
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 0 5px;
`;

export const ContainerThumbnails = styled.div`
  /* display: flex; */
  margin-top: 20px;
  display: grid;

  grid-row: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  /* padding-bottom: 10px; */
  /* overflow-y: auto; */
  /* overflow: hidden; */

  max-width: 592px;
  /* grid-auto-flow: row; */
  /* grid-auto-flow: column; */
`;

export const Thumbnail = styled.button`
  border: 0;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  border-radius: 4px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;

  width: 104.4px;
  height: 73.37px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  button {
    margin-top: .2rem;
    margin-right: .2rem;
    border: 0;
    background-color: transparent;
    color: var(--white);
    font-weight: 600;
  }
`;
