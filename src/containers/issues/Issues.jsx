import React, { useState } from 'react';
import * as Styled from './Issues.styled';
import { getAll } from '../../api/api.js';

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

function Issue({ title, like }) {
  return (
    <Styled.Issue>
      <Styled.Title>{title}</Styled.Title>
      <StarIcon like={like} />
    </Styled.Issue>
  );
}

function StarIcon(props) {
  const [like, setLike] = useState(props.like);
  return (
    <Styled.StarIcon like={like} onClick={() => setLike(!like)} />
  );
}

export default Issues;
