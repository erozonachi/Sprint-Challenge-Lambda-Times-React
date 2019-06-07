import React from 'react';
import TabItem from './StyledComponents/TabItem';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const selectTab = () => {
    props.selectTabHandler(props.tab);
  };
  return (
    <TabItem
      active={props.selectedTab === props.tab? true : false}
      onClick={selectTab}
    >
      {props.tab.toUpperCase()}
    </TabItem>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};

export default Tab;
