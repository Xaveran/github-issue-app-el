import React from 'react';
import NavigationTab from './NavigationTab';
import iconGithub from '../../../assets/icon-github.svg';

export default { title: 'NavigationTab' };

export const AllNavigationTab = () => <NavigationTab text="All" count="12" icon={iconGithub} />