import styled from 'styled-components';
import { borderRadius } from '../layout/Layout.styled';

export const System = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  background-color: rgb(24, 24, 39);
  border-top-left-radius: ${borderRadius};

  > * {
    padding-left: 10px;
  }
`;
