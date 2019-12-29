import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './NavigationTab.styled';

function NavigationTab({ icon, text, count }) {
  return (
    <Container>
      <img src={icon} alt=""></img>
      <div>{text}</div>
      <div>{count}</div>
    </Container>
  );
}

NavigationTab.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default NavigationTab;
