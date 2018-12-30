import React from 'react';

import OverlayRenderer from './OverlayRenderer.jsx';

import { CenteredDiv } from '../styled-components/OverlayStyles.jsx'

export default class OverlayProvider extends React.Component {
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
            {child}
          </OverlayRenderer>
        </CenteredDiv>
      );
    });
  }
}
