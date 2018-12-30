import React from 'react';

import {
  OverlayHeader,
} from '../styled-components/OverlayStyles.jsx';

export default props => <OverlayHeader>{props.render()}</OverlayHeader>;
