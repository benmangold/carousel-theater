import React from 'react';

import {
  CarouselSection,
  CarouselWrapper,
  CarouselImageWrapper,
} from '../styled-components/overlay/OverlayStyles.jsx';

export default props => {
  return (
    <CarouselWrapper>
      <CarouselSection>
        <CarouselImageWrapper>
          {props.render(props)}
        </CarouselImageWrapper>
      </CarouselSection>
    </CarouselWrapper>
  );
};
