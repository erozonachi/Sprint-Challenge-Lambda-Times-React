import styled from 'styled-components';

const TabsItem = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${(props) => props.active? '#333' : '#fff'};
  background-color: ${(props) => props.active? '#fff' : '#333'};
  border: ${(props) => props.active? '2px solid #333' : 'none'};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default TabsItem;
