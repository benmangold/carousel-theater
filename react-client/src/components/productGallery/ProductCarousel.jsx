import React from 'react';
import { CarouselImage } from '../styled-components/overlay/OverlayStyles.jsx';
import ScrollOverImage from './ScrollOverImage.jsx';
import MagnifyingGlass from './MagnifyingGlass.jsx';

export default props => {
  return props.carouselImgs.map((item, index, collection) => {
    // return <CarouselImage key={index} src={item} index={index} />;
    return (
      <ScrollOverImage
        src={item}
        scrollOverDisplay={true}
        renderScrollOverDisplay={() => <MagnifyingGlass />}
      />
    );
  });
};
