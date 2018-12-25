import React from 'react';

import {
  CenterImage, // we may need some of these styles
  BannerSpacer,
  BannerContainer,
  BannerWrapper,
} from '../styled-components/overlay/BannerStyles.jsx';

import {
  ButtonLeft,
  ButtonRight,
} from '../styled-components/overlay/OverlayStyles.jsx';

export default props => {
  return (
    <div>
      <BannerSpacer />
      <BannerWrapper>
        {props.render()}
        {props.children}
        {props.displayCarouselButtons ? (
          <div>
            <ButtonLeft
              onClick={props.handleLeftClick}
              type='image'
              src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
            />

            <ButtonRight
              onClick={props.handleRightClick}
              type='image'
              src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
            />
          </div>
        ) : null}
      </BannerWrapper>
      <BannerSpacer />
    </div>
  );
};
