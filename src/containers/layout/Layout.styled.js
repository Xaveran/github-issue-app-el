import styled from 'styled-components';

const widthInEm = 40;
const heightInEm = 40;

export const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${widthInEm}em;
  height: ${heightInEm}em;
  background-color: white;
  margin-top: -${heightInEm / 2}em;
  margin-left: -${widthInEm / 2}em;
`;
