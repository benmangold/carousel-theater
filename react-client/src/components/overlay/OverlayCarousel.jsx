import React from 'react';

import {
  CarouselSection,
  CarouselWrapper,
  CarouselImageWrapper,
} from '../styled-components/overlay/CarouselStyles.jsx';

export default props => {
  console.log('!')
  console.log(props)
  return props.display ? (
    <div>
      <CarouselSection>
        <CarouselImageWrapper>
          {
            props.render(props)
          }
        </CarouselImageWrapper>
      </CarouselSection>
    </div>
  ) : null;
};
