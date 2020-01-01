import React from 'react';
import * as Styled from './Filters.styled';

function Filter({ title, count, iconName, active, onClick }) {
  return (
    <Styled.Filter active={active} onClick={onClick}>
      <Styled.FilterIcon name={iconName} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Count>{count}</Styled.Count>
    </Styled.Filter>
  );
}

export default Filter;
