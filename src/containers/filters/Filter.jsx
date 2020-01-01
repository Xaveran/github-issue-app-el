import React from 'react';
import * as Styled from './Filters.styled';

function Filter({ title, count, iconName }) {
  return (
    <Styled.Filter>
      <Styled.FilterIcon name={iconName} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Count>{count}</Styled.Count>
    </Styled.Filter>
  );
}

export default Filter;
