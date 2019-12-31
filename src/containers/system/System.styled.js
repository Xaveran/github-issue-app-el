import styled from 'styled-components';
import colors from '../../utils/colors';
import { borderRadius } from '../layout/Layout.styled';

export const System = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  background-color: ${colors.mirage};
  border-top-left-radius: ${borderRadius};

  > * {
    padding-left: 10px;
  }
`;
