/* render props and configure overlay */

import React from 'react';
import Overlay from './Overlay.jsx';

export default class OverlayRenderer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
    };

    this.turnOverlayOn = () => this.setState({ overlay: true });
    this.turnOverlayOff = () => this.setState({ overlay: false });

    this.turnOverlayOn = this.turnOverlayOn.bind();
    this.turnOverlayOff = this.turnOverlayOff.bind();
  }

  render() {
    console.log(this.props);
    return (
      // render single item overlay ~ SimpleOverlay ~ no carousel or lr buttons
      // render array of items overlay ~ CarouselOverlay ~ carousel and lr buttons
      <React.Fragment>
        <div onClick={this.turnOverlayOn}>
          {this.props.render()}
          {this.props.children}
        </div>
        <Overlay
          overlay={this.state.overlay}
          handleExit={this.turnOverlayOff}
          render={this.props.render}
          renderBanner={this.props.renderBanner}
          renderButtons={true}
          renderCarousel={this.props.renderCarousel}
          displayCarousel={true}
          imgs={this.props.carouselImgs}
        >
          {this.props.children}
        </Overlay>
      </React.Fragment>
    );
  }
}
