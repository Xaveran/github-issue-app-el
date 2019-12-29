import styled, { css } from 'styled-components';

const widthInEm = 40;
const heightInEm = 40;
const borderRadius = '1em';

const centerLayoutCss = css`
  position: absolute;
  top: 49%;
  left: 50%;
  width: ${widthInEm}em;
  height: ${heightInEm}em;
  background-color: white;
  margin-top: -${heightInEm / 2}em;
  margin-left: -${widthInEm / 2}em;
`;

const gridCss = css`
  display: grid;
  grid-template-columns: [sidebar] 1fr [issues] 4fr;
  background-color: red;
`;

export const Layout = styled.div`
  ${centerLayoutCss}
  ${gridCss}
  border-radius: ${borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
`;

export const Sidebar = styled.div`
  display: grid;
  grid-template-rows: [system] 1fr [navigation] 8fr;
  background-color: yellow;
  border-bottom-left-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};
`;

export const Issues = styled.div`
  display: grid;
  background-color: green;
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
`;

export const System = styled.div`
  display: grid;
  background-color: purple;
  border-top-left-radius: ${borderRadius};
`;

export const Navigation = styled.div`
  display: grid;
  background-color: blue;
  border-bottom-left-radius: ${borderRadius};
`;
