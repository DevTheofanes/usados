import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 402px;
  position: relative;

  .CarouselButton:hover{
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
  height: 402px;
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
    background-repeat: repeat;
    background-size: cover;
    /* background-position: 50% center; */
    filter: blur(32px);
    /* position: fixed; */
    /* height: 200%;
    width: 200%; */
    transform: translate(-32px, -32px);
    height: 100%;
    width: 100%;
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
  bottom: 2%;
  left: 48%;
  z-index: 2;
  display: flex;
`;

export const CarouselButtonCircle = styled.div`
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 0 5px;
`;
