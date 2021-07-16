import React from 'react';
import { ReactComponent as CircleSvg } from '../../../../assets/circle.svg';

function Circle({ color }) {
  return <CircleSvg height="10px" width="10px" fill={color} />;
}

export default Circle;
