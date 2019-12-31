import styled from 'styled-components';
import colors from '../../utils/colors';
import { borderRadius } from '../layout/Layout.styled';

import Icon from '../../../assets/icon-star.svg';

export const Issues = styled.div`
  display: grid;
  padding: 10px;
  background-color: ${colors.blackhaze};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
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
  font-size: 14px;
`;

export const StarIcon = styled(Icon)`
  position: relative;
  right: 10px;

  path {
    fill: black;
  }
`;
