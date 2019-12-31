import React from 'react';
import * as Styled from './System.styled';
import CircleIcon from '../../components/circleIcon/CircleIcon';

function System() {
  return (
    <Styled.System>
      <CircleIcon color="rgb(255, 87, 85)" />
      <CircleIcon color="rgb(255, 186, 51)" />
      <CircleIcon color="rgb(0, 201, 75)" />
    </Styled.System>
  );
}

export default System;
