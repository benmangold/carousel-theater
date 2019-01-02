/* render props and configure overlay */

import React from 'react';
import Overlay from './Overlay.jsx';
import { ButtonExit } from '../styled-components/ButtonStyles.jsx';
const X_BUTTON_URL =
  'https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png';
const IMAGE = 'image';
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
          renderCarousel={this.props.renderCarousel}
          // renderHeader={() => {
          //   <ButtonExit type={IMAGE} src={X_BUTTON_URL} />;
          // }}
          displayButtons={this.props.displayButtons}
          displayCarousel={true}
          imgs={this.props.carouselImgs}
        >
          {this.props.children}
        </Overlay>
      </React.Fragment>
    );
  }
}
