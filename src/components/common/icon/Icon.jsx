import React from 'react';
import { ReactComponent as GithubIcon } from '../../../../assets/icon-github.svg';
import { ReactComponent as StarIcon } from '../../../../assets/icon-star.svg';
import { ReactComponent as ClosedIcon } from '../../../../assets/icon-closed-issue.svg';
import { ReactComponent as OpenIcon } from '../../../../assets/icon-open-issue.svg';

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
