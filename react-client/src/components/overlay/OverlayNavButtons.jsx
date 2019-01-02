/* provides buttons for navigation through carousel images*/

import React from 'react';

import { ButtonLeft, ButtonRight } from '../styled-components/ButtonStyles.jsx';

const ARROW_IMG_URL = 'https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'

export default props => {
  return (
    <div>
      <ButtonLeft
        onClick={props.handleLeftClick}
        src={ARROW_IMG_URL}
      />

      <ButtonRight
        onClick={props.handleRightClick}
        src={ARROW_IMG_URL}
      />
    </div>
  );
};
