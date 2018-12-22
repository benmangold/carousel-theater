import React from 'react';

import {
  CenterImage, // we may need some of these styles
  BannerSpacer,
  BannerContainer,
  CenterImageWrapper,
} from '../styled-components/overlay/OverlayStyles.jsx';

export default props => {
  return (
    <BannerContainer>
      <CenterImageWrapper>
        {/* <CenterImage src={props.src} /> */} 
        {props.render()}
      </CenterImageWrapper>
      <BannerSpacer />
    </BannerContainer>
  );
};
