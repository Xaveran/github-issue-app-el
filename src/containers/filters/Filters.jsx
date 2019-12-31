import React from 'react';
import Filter from './Filter';
import * as Styled from './Filters.styled';

function Filters() {
  return (
    <Styled.Filters>
      <Filter title="All" count={12} />
      <Filter title="Open" count={4} />
      <Filter title="Closed" count={8} />
    </Styled.Filters>
  );
}

export default Filters;
