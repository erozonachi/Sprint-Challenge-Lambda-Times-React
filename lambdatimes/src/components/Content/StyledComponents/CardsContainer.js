import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
  > div {
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;

    > div {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      margin-top: 15px;
      &:first-of-type {
        display: block;
        margin-top: 0;
        font-size: 25px;
        font-family: Didot, serif;
      }

      > div {
        padding-right: 10px;
        border-right: 1px solid lightgrey;
        height: 40px;
        img {
          width: 40px;
        }
        span {
          padding-left: 10px;
          font-size: 12px;
          letter-spacing: 1px;
          font-weight: bold;
        }
      }
    }
  }
`;

export default CardsContainer;
