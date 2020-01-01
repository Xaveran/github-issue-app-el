import React from 'react';
import Background from '../common/background/Background';
import * as Styled from './App.styled';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <Styled.GlobalStyle />
      <Background>
        <Layout></Layout>
      </Background>
    </>
  );
}

export default App;
