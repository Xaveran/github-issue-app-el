import React, { useState } from 'react';
import * as Styled from './Issues.styled';
import issues from '../../api/issues.json';

const issueMap = issues.reduce((acc, curr) => {
  const collection = acc[curr.date] || [];
  if (collection) {
    return { ...acc, [curr.date]: [...collection, curr] };
  } else {
    return { ...acc, [curr.date]: curr };
  }
}, {});

function Issues() {
  return (
    <Styled.Issues>
      {Object.entries(issueMap).map(([key, value]) => {
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
