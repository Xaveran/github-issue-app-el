import React from 'react';
import Filter from './Filter';
import * as Styled from './Filters.styled';

function Filters({ activeFilter, setActiveFilter }) {
  return (
    <Styled.Blur>
      <Styled.Filters>
        <Filter
          title="All"
          count={12}
          iconName="github"
          active={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
        />
        <Filter
          title="Open"
          count={4}
          iconName="open"
          active={activeFilter === 'open'}
          onClick={() => setActiveFilter('open')}
        />
        <Filter
          title="Closed"
          count={8}
          iconName="closed"
          active={activeFilter === 'closed'}
          onClick={() => setActiveFilter('closed')}
        />
      </Styled.Filters>
    </Styled.Blur>
  );
}

export default Filters;
