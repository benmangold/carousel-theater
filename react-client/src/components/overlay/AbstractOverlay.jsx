import React from 'react';
import Overlay from './Overlay.jsx';

// /* Overlay recieves what to render via render props  */

// /* whatever Overlay renders will create a full screen overlay upon click */

export default class AbstractOverlay extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      overlay: false
    }

    this.turnOverlayOn = () => this.setState({ overlay: true });
    this.turnOverlayOff = () => this.setState({ overlay: false });

    this.turnOverlayOn = this.turnOverlayOn.bind();
    this.turnOverlayOff = this.turnOverlayOff.bind();
  }

  render() {
    return (
      <React.Fragment>
        <div onClick={this.turnOverlayOn}>{this.props.render()}</div>
        <Overlay
          overlay={this.state.overlay}
          handleExit={this.turnOverlayOff}
          render={this.props.render}
          renderBanner={this.props.renderBanner}
          renderCarousel={this.props.renderCarousel}
          imgs={this.props.carouselImgs}
        />
      </React.Fragment>
    );
  }
}