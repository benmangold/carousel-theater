import React from 'react';

import OverlayRenderer from './OverlayRenderer.jsx';

import styled from 'styled-components';

const CenteredDiv = styled.div`
  margin: 0 auto;
`;

export default class OverlayProvider extends React.Component {
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
            {child}
          </OverlayRenderer>
        </CenteredDiv>
      );
    });
  }
}
