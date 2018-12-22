/* an embedded image which can render an image upon scrollover */

import React from 'react';

import {
  Container,
  Image,
} from './styled-components/GalleryStyles.jsx';

export default (props) => (
  <Container>
    <Image src={props.src} />
    {props.scrollOverDisplay ? props.renderScrollOverDisplay(): (null)}
  </Container>
);
