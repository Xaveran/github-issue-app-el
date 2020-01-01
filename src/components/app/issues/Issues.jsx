import React from 'react';
import Issue from './Issue';
import * as Styled from './Issues.styled';

function Issues({ issues }) {
  return (
    <Styled.Issues>
      {Object.entries(issues).map(([key, value]) => {
        return (
          <div key={key}>
            <Styled.DateLabel>{key}</Styled.DateLabel>
            {value.map(props => {
              return <Issue key={props.id} {...props} />;
            })}
          </div>
        );
      })}
    </Styled.Issues>
  );
}

export default Issues;
