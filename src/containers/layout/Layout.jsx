import React from 'react';
import Issues from '../issues/Issues';
import System from '../system/System';
import Filters from '../filters/Filters';
import * as Styled from './Layout.styled';

function Layout() {
  return (
    <Styled.Layout>
      <Styled.Sidebar>
        <System />
        <Filters />
      </Styled.Sidebar>
      <Issues />
    </Styled.Layout>
  );
}

export default Layout;
