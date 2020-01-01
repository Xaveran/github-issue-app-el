import React, { useState } from 'react';
import Issues from '../issues/Issues';
import System from '../system/System';
import Filters from '../filters/Filters';
import * as Styled from './Layout.styled';

function Layout() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <Styled.Layout>
      <Styled.Sidebar>
        <System />
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </Styled.Sidebar>
      <Issues />
    </Styled.Layout>
  );
}

export default Layout;
