import React from 'react';
import PropTypes from 'prop-types';

import OverlayRenderer from './OverlayRenderer.jsx';

import {
  ImageContainer,
  ImageStyles,
} from '../styled-components/ProductGalleryStyles.jsx';

export default class Provider extends React.Component {
  // Render the child component
  render() {
    return React.Children.toArray(this.props.children).map((child, index) => {
      return (
        <div
          id={index}
          onClick={e => {
            console.log(e.target);
          }}
        >
          <OverlayRenderer
            render={() => <div />}
            renderBanner={() => <div />}
            renderCarousel={() => <div />}
            displayButtons={false}
          >
            <ImageContainer>
              <ImageStyles>

            {child}

              </ImageStyles>
            </ImageContainer>
          </OverlayRenderer>
        </div>
      );
    });
  }
}
