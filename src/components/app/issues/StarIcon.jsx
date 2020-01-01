import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Issues.styled';

function StarIcon(props) {
  const [like, setLike] = useState(props.like);
  return (
    <Styled.StarIcon like={like} onClick={() => setLike(!like)} />
  );
}

StarIcon.propTypes = {
  like: PropTypes.bool.isRequired,
};

export default StarIcon;
