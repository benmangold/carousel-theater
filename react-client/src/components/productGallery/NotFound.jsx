import React from 'react';
import NotFound from '../styled-components/NotFoundStyles.jsx';

export default props => {
  return (
    <NotFound fourOhFour={props.fourOhFour}>
      Not Found - Please Try Another Product
    </NotFound>
  );
};

