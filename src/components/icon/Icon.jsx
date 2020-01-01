import React from 'react';
import GithubIcon from '../../../assets/icon-github.svg';
import StarIcon from '../../../assets/icon-star.svg';
import ClosedIcon from '../../../assets/icon-closed-issue.svg';
import OpenIcon from '../../../assets/icon-open-issue.svg';

const iconMap = {
  github: GithubIcon,
  star: StarIcon,
  closed: ClosedIcon,
  open: OpenIcon,
};

function Icon({ name, ...otherProps }) {
  const Component = iconMap[name];
  return <Component {...otherProps} />;
}

export default Icon;
