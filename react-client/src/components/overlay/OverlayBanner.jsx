import React from 'react';

import styled from 'styled-components'

import {
  CenterDiv, // we may need some of these styles
  BannerContainer,
  BannerWrapper,
} from '../styled-components/overlay/BannerStyles.jsx';

import {
  ButtonLeft,
  ButtonRight,
} from '../styled-components/overlay/OverlayStyles.jsx';


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
          <div>
            <ButtonLeft
              onClick={props.handleLeftClick}
              src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
            />

            <ButtonRight
              onClick={props.handleRightClick}
              src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
            />
          </div>
        ) : null}
      </BannerWrapper>
      <BannerSpacer />
    </CenterDiv>
  );
};
