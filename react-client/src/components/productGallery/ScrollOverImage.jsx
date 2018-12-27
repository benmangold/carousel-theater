/* an embedded image which can render an image upon scrollover */

import React from 'react';

import {
  ImageContainer,
  Image,
} from '../styled-components/ProductGalleryStyles.jsx';

export default props => (
  <React.Fragment>
    <ImageContainer>
      <Image src={props.src} />
      {props.scrollOverDisplay ? props.renderScrollOverDisplay() : null}
    </ImageContainer>
  </React.Fragment>
);
