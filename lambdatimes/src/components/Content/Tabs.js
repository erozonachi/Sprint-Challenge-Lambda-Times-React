import React from 'react';
import TabsContainer from './StyledComponents/TabsContainer';
import Tab from './Tab';
import PropTypes from 'prop-types';
const Tabs = props => {
  return (
    <TabsContainer>
      <div>
        <span>TRENDING TOPICS:</span>
        {
          props.tabs.map(tab => <Tab 
            key={tab} 
            tab={tab} 
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
          />)
        }
      </div>
    </TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};
export default Tabs;
