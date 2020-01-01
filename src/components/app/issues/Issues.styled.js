import React from 'react';
import styled from 'styled-components';
import Icon from '../../common/icon/Icon';
import colors from '../../../utils/colors';
import { borderRadius } from '../layout/Layout.styled';

export const Issues = styled.div`
  padding: 10px;
  background-color: ${colors.blackhaze};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  overflow-x: auto;
`;

export const Issue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid ${colors.mercury};
  margin: 5px;
  border-radius: 5px;
  height: 40px;
`;

export const Title = styled.span`
  position: relative;
  left: 10px;
`;

export const DateLabel = styled.time`
  position: relative;
  color: grey;
  left: 5px;
  font-size: 12px;
`;

// Filter props to avoid non-boolean value warning, more: https://github.com/styled-components/styled-components/issues/1198#issuecomment-425650423
export const StarIcon = styled(({ like, ...props }) => (
  <Icon {...props} name="star" />
))`
  position: relative;
  right: 10px;

  path {
    fill: ${props => (props.like ? 'black' : 'white')};
    stroke: ${colors.mercury};
  }
`;
