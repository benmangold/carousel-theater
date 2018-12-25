import React from 'react';

import {
  CarouselSection,
  CarouselWrapper,
  CarouselImageWrapper,
} from '../styled-components/overlay/CarouselStyles.jsx';

export default props => {
  return props.display ? 
    <CarouselWrapper>
      {/* <CarouselSection> */}
        <CarouselImageWrapper>{props.render(props)}</CarouselImageWrapper>
      {/* </CarouselSection> */}
    </CarouselWrapper>
   : null;
};
