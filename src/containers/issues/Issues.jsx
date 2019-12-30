import React, { useEffect, useState } from 'react';
import * as Styled from './Issues.styled';
import issues from '../../api/issues.json';

function Issues() {
  return (
    <Styled.Issues>
      {issues.map(props => {
        return <Issue key={props.id} {...props} />;
      })}
    </Styled.Issues>
  );
}

function Issue({ title }) {
  return <Styled.Issue />;
}

export default Issues;
