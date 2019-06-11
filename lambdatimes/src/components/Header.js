import React from 'react';
import AppHeader from './StyledComponents/Header';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <AppHeader>
      <span>SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span>98°</span>
    </AppHeader>
  )
}

export default Header