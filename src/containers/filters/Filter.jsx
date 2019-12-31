import React from 'react';
import * as Styled from './Filters.styled';

function Filter({ title, count }) {
  return (
    <Styled.Filter>
      <Styled.Icon />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Count>{count}</Styled.Count>
    </Styled.Filter>
  );
}

export default Filter;
