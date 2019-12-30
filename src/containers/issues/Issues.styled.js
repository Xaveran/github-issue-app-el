import styled from 'styled-components';
import { borderRadius } from '../layout/Layout.styled';

export const Issues = styled.div`
  display: grid;
  padding: 10px;
  background-color: rgb(246, 246, 246);
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
`;

export const Issue = styled.div`
  background-color: white;
  border: 1px solid rgb(229, 229, 229);
  margin: 5px;
  border-radius: 5px;
  height: 40px;
`;
