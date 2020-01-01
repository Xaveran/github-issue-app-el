import styled, { css } from 'styled-components';
import colors from '../../../utils/colors';
import Icon from '../../common/icon/Icon';
import { borderRadius } from '../layout/Layout.styled';

const blur = radius => css`
  -webkit-filter: blur(${radius});
  -moz-filter: blur(${radius});
  -o-filter: blur(${radius});
  -ms-filter: blur(${radius});
  filter: blur(${radius});
`;

// TODO: correct background-position, when inherited blurred image is not exactly part of background image
export const Blur = styled.div`
  &::before {
    content: 'navigation-blur';
    ${blur('6px')}
    position: absolute;
    width: 150px;
    height: 460px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${borderRadius};
  background-color: ${colors.mirageTransparent};
  ${blur('0px')}
  width: 150px;
  height: 460px;
`;

const elo = 'rba(144, 147, 173)';

export const Filter = styled.div`
  display: grid;
  grid-template-columns: [icon] 30px [title] 90px [count] 30px;
  align-items: center;
  width: 100%;
  height: 50px;

  ${props =>
    props.active &&
    css`
      background-color: ${colors.ebonyClay};
    `}

  &:hover {
    background-color: ${colors.ebonyClay};
  }
`;

export const FilterIcon = styled(Icon)`
  justify-self: end;
`;

export const Title = styled.span`
  position: relative;
  left: 10px;
  font-size: 15px;
  color: white;
`;

export const Count = styled.span`
  justify-self: center;
  color: gray;
  font-size: 13px;
`;
