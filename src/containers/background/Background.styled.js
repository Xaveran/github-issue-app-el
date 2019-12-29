import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`; 