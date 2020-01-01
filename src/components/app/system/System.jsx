import React from 'react';
import * as Styled from './System.styled';
import colors from '../../../utils/colors';
import CircleIcon from '../../common/icon/CircleIcon';

function System() {
  return (
    <Styled.System>
      <CircleIcon color={colors.carnation} />
      <CircleIcon color={colors.mysin} />
      <CircleIcon color={colors.malachite} />
    </Styled.System>
  );
}

export default System;
