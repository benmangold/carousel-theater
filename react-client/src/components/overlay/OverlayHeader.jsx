import React from 'react';

const X_BUTTON_URL =
  'https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png';
const IMAGE = 'image';

import {
  OverlayHeader,
  ButtonExit,
} from '../styled-components/overlay/OverlayStyles.jsx';

export default props => <OverlayHeader>{props.render()}</OverlayHeader>;
