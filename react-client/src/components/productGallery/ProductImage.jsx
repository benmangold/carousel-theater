import React from 'react';
import Image from './Image.jsx';
import MagnifyingGlass from './MagnifyingGlass.jsx';


export default props => {
  return (
    <Image
      src={props.bannerImg}
      scrollOverDisplay={true}
      renderScrollOverDisplay={() => <MagnifyingGlass />}
    />
  );
};