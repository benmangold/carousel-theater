import React from 'react';
import ScrollOverImage from './ScrollOverImage.jsx';
import MagnifyingGlass from './MagnifyingGlass.jsx';

export default props => {
  return (
    <ScrollOverImage
      src={props.bannerImg}
      scrollOverDisplay={true}
      renderScrollOverDisplay={() => <MagnifyingGlass />}
    />
  );
};
