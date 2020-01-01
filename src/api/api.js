import issues from './issues.json';

export const getIssues = filter => {
  switch (filter) {
    case 'all':
      return getAll();
    case 'open':
      return getOpen();
    case 'closed':
      return getClosed();
    default:
      return {};
  }
};

const getAll = () => {
  return asMap(issues);
};

const getOpen = () => {
  return asMap(issues.filter(issue => issue.open));
};

const getClosed = () => {
  return asMap(issues.filter(issue => !issue.open));
};

function asMap(values) {
  return values.reduce((acc, curr) => {
    const collection = acc[curr.date] || [];
    if (collection) {
      return { ...acc, [curr.date]: [...collection, curr] };
    } else {
      return { ...acc, [curr.date]: curr };
    }
  }, {});
}
