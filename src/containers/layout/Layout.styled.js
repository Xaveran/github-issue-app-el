import styled, { css } from 'styled-components';

const widthInPx = 650;
const heightInPx = 500;
export const borderRadius = '10px';

const centerLayoutCss = css`
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: ${widthInPx}px;
  height: ${heightInPx}px;
  margin-top: -${heightInPx / 2}px;
  margin-left: -${widthInPx / 2}px;
`;

const gridCss = css`
  display: grid;
  grid-template-columns: [sidebar] 150px [issues] 500px;
`;

export const Layout = styled.div`
  ${centerLayoutCss}
  ${gridCss}
  border-radius: ${borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
`;

export const Sidebar = styled.div`
  display: grid;
  grid-template-rows: [system] 40px [filters] 460px;
  border-bottom-left-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};
`;
