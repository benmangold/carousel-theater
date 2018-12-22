import React from 'react';

const X_BUTTON_URL= 'https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png'
const IMAGE = 'image'

import {
  CarouselHeader,
  ButtonExit,
} from '../styled-components/overlay/OverlayStyles.jsx';

export default props => (
  <CarouselHeader>
    <ButtonExit
      onClick={props.handleExit}
      type={IMAGE}
      src={X_BUTTON_URL}
    />
  </CarouselHeader>
);
