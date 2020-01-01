import React from 'react';
import Filter from './Filter';
import * as Styled from './Filters.styled';

function Filters() {
  return (
    <Styled.Filters>
      <Filter title="All" count={12} iconName="github" />
      <Filter title="Open" count={4} iconName="open" />
      <Filter title="Closed" count={8} iconName="closed" />
    </Styled.Filters>
  );
}

export default Filters;
