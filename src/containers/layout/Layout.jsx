import React from 'react';
import Issues from '../issues/Issues';
import * as Styled from './Layout.styled';

function Layout() {
  return (
    <Styled.Layout>
      <Styled.Sidebar>
        <Styled.System />
        <Styled.Navigation />
      </Styled.Sidebar>
      <Issues />
    </Styled.Layout>
  );
}

export default Layout;
