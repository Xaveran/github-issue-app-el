import { createGlobalStyle } from 'styled-components';
import RobotoFont from '../../../assets/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-size: 14px;
  }

  @font-face {
    font-family: Roboto;
    src: url('${RobotoFont}') format('truetype');
  }
`;
