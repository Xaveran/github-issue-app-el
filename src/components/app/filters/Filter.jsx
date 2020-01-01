import React from 'react';
import PropTypes from 'prop-types';
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

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  iconName: PropTypes.oneOf(['github', 'open', 'closed']).isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
