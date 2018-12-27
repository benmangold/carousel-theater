import React from 'react';

import OverlayRenderer from './OverlayRenderer.jsx';

import styled from 'styled-components';

const CenteredDiv = styled.div`
  margin: 0 auto;
  position: relative;
`;

import {
  ImageContainer,
  ImageStyles,
} from '../styled-components/ProductGalleryStyles.jsx';

export default class Provider extends React.Component {
  // Render the child component
  render() {
    return React.Children.toArray(this.props.children).map((child, index) => {
      return (
        <CenteredDiv key={index}>
          <OverlayRenderer
            render={() => <div />}
            renderBanner={() => <div />}
            renderCarousel={() => <div />}
            displayButtons={false}
          >
            <ImageContainer>
              <ImageStyles>{child}</ImageStyles>
            </ImageContainer>
          </OverlayRenderer>
        </CenteredDiv>
      );
    });
  }
}
