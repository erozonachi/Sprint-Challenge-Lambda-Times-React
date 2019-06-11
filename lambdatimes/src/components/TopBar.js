import React from 'react';
import AppTopBar from './StyledComponents/TopBar';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <AppTopBar>
      <div>
        <div>
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div>
          <span>LOG IN</span>
        </div>
      </div>
    </AppTopBar>
  )
}

export default TopBar;