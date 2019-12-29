import React from 'react';

function NavigationTab(props) {
  return <>
      <img src={props.icon} alt=''></img>
      <div>{props.text}</div>
      <div>{props.count}</div>
    </>
}

export default NavigationTab;