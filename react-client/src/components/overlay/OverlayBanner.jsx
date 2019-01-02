import React from 'react';

import styled from 'styled-components';

import {
  BannerSpacer,
  BannerWrapper,
} from '../styled-components/BannerStyles.jsx';

import OverlayNav from './OverlayNavButtons.jsx';

export default props => {
  return (
    <BannerWrapper>
      <BannerSpacer />
      {props.render()}
      {props.children}
      {props.displayCarouselButtons ? (
        <OverlayNav
          handleLeftClick={props.handleLeftClick}
          handleRightClick={props.handleRightClick}
        />
      ) : null}
      <BannerSpacer />
    </BannerWrapper>
    // </CenterDiv>
  );
};
