import React from 'react';
import * as Styled from './Background.styled';
import background from '../../assets/background.jpg';

function Background({ children }) {
  return <Styled.Background image={background}>{children}</Styled.Background>;
}

export default Background;

