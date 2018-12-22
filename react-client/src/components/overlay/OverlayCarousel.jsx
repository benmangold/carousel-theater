import React from 'react';

import {
  CarouselSection,
  CarouselWrapper,
  CarouselImage,
  CarouselImageWrapper,
} from '../styled-components/overlay/OverlayStyles.jsx';

export default props => {
  return (
    <CarouselWrapper>
      <CarouselSection>
        <CarouselImageWrapper>
          {props.render()}
          {/* {props.imgs.map((item, index, array) => {
            return (
              <CarouselImage
                key={index}
                src={item}
                onClick={() => {
                  props.handleImageClick(index);
                }}
                index={index}
              />
            );
          })} */}
        </CarouselImageWrapper>
      </CarouselSection>
    </CarouselWrapper>
  );
};
