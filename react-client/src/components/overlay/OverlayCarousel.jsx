import React from 'react';

import {
  CarouselSection,
  CarouselWrapper,
  CarouselImageWrapper,
} from '../styled-components/CarouselStyles.jsx';

export default props => {
  return props.display ? (
    <div>
      <CarouselSection>
        <CarouselImageWrapper>{props.render(props)}</CarouselImageWrapper>
      </CarouselSection>
    </div>
  ) : null;
};
