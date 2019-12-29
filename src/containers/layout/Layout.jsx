import React from 'react';
import * as Styled from './Layout.styled';

function Layout() {
  return (
    <Styled.Layout>
      <Styled.Sidebar>
        <Styled.System />
        <Styled.Navigation />
      </Styled.Sidebar>
      <Styled.Issues />
    </Styled.Layout>
  );
}

export default Layout;
