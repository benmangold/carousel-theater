import React from 'react';

import styled from 'styled-components'

import {
  CenterDiv,
  BannerWrapper,
} from '../styled-components/BannerStyles.jsx';

import OverlayNav from './OverlayNavButtons.jsx'

const BannerSpacer = styled.div`
  margin-top: 10px;
`;

export default props => {
  return (
    <CenterDiv>
      <BannerSpacer />
      <BannerWrapper>
        {props.render()}
        {props.children}
        {props.displayCarouselButtons ? (
          <OverlayNav handleLeftClick={props.handleLeftClick} handleRightClick={props.handleRightClick}/>
        ) : null}
      </BannerWrapper>
      <BannerSpacer />
    </CenterDiv>
  );
};