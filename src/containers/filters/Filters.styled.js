import styled from 'styled-components';
import Icon from '../../components/icon/Icon';
import { borderRadius } from '../layout/Layout.styled';

export const Filters = styled.div`
  // &::before {
  //   content: 'navigation-blur';
  //   background-image: inherit;
  //   background-position: inherit;
  //   filter: blur(6px);
  // }

  display: flex;
  flex-direction: column;
  background-color: rgb(36, 40, 56);
  border-bottom-left-radius: ${borderRadius};
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  &:hover {
    background-color: rgb(44, 47, 73);
  }
`;

export const FilterIcon = styled(Icon)`
  display: flex;
  flex-grow: 1;
`;

export const Title = styled.span`
  display: flex;
  flex-grow: 3;
  font-size: 15px;
  color: white;
`;

export const Count = styled.span`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  color: gray;
  font-size: 13px;
`;
