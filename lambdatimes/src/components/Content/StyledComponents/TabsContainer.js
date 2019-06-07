import styled from 'styled-components';

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }

  > div {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;

    > span {
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;

export default TabsContainer;
