import React from 'react';
import NavigationTab from './NavigationTab';
import iconGithub from '../../../assets/icon-github.svg';

export default { title: 'NavigationTab' };

export const AllNavigationTab = () => (
  <div style={{ backgroundColor: '#B695C0' }}>
    <NavigationTab text="All" count={12} icon={iconGithub} />
  </div>
);
