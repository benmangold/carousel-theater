import React from 'react';
import { CarouselImage } from '../styled-components/overlay/OverlayStyles.jsx';


export default props => {
  return props.carouselImgs.map((item, index, collection) => {
    return (
      <CarouselImage
        key={index}
        src={item}
 
      />
    );
  });
};
