import React from 'react';
import Background from './Background';
import * as Styled from './App.styled';

function App() {
  return <>
      <Styled.GlobalStyle />
      <Background>Hello world</Background>
    </>
}

export default App;