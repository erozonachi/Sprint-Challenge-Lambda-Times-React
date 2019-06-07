import styled from 'styled-components';

const Carousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }
  img {
    width: 100%;
    display: none;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:hover {
      color: #333;
      background-color: #fff;
      border: 2px solid #333;
    }
    &:first-of-type {
      top: 50%;
      left: 25px;
      transform: translate(0, -50%);
    }
    &:last-of-type {
      top: 50%;
      right: 25px;
      transform: translate(0, -50%);
    }
  }
`;

export default Carousel;
