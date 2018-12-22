import React from 'react';
import NotFound from '../styled-components/NotFound.jsx';

export default props => {
  return (
    <NotFound fourOhFour={props.fourOhFour}>
      Not Found - Please Try Another Product
    </NotFound>
  );
};
