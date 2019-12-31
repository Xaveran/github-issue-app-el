import React from 'react';
import Issues from '../issues/Issues';
import System from '../system/System';
import * as Styled from './Layout.styled';

function Layout() {
  return (
    <Styled.Layout>
      <Styled.Sidebar>
        <System />
        <Styled.Navigation />
      </Styled.Sidebar>
      <Issues />
    </Styled.Layout>
  );
}

export default Layout;
