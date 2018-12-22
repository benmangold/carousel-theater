/* an embedded image which can render an image upon scrollover */

import React from 'react';

import {
  ImageContainer,
  Image,
} from '../styled-components/GalleryStyles.jsx';

export default (props) => (
  <ImageContainer>
    <Image src={props.src} />
    {props.scrollOverDisplay ? props.renderScrollOverDisplay(): (null)}
  </ImageContainer>
);
