import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon';
import * as Styled from './Issues.styled';

function Issue({ title, like }) {
  return (
    <Styled.Issue>
      <Styled.Title>{title}</Styled.Title>
      <StarIcon like={like} />
    </Styled.Issue>
  );
}

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  like: PropTypes.bool.isRequired,
};

export default Issue;
