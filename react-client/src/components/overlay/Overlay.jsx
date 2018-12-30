/* displays a fullscreen overlay with a banner, or a banner with a carousel */

import React from 'react';

import {OverlayContainer} from '../styled-components/OverlayStyles.jsx';

import {ButtonExit} from '../styled-components/ButtonStyles.jsx';

import OverlayHeader from './OverlayHeader.jsx';
import OverlayBanner from './OverlayBanner.jsx';
import OverlayCarousel from './OverlayCarousel.jsx';

const X_BUTTON_URL =
  'https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png';
const IMAGE = 'image';
export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerImageIndex: 0,
      numImgs: props.imgs.length,
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleRightClick(e) {
    let i = this.state.centerImageIndex;
    if (i < this.props.imgs.length - 1) i++;
    this.setState({ centerImageIndex: i });
  }

  handleLeftClick(e) {
    let i = this.state.centerImageIndex;
    if (i > 0) i--;
    this.setState({ centerImageIndex: i });
  }

  handleImageClick(centerImageIndex) {
    this.setState({ centerImageIndex });
  }

  render() {
    return (
      <OverlayContainer overlay={this.props.overlay}>
        <OverlayHeader
          handleExit={this.props.handleExit}
          render={() => (
            <ButtonExit
              onClick={this.props.handleExit}
              type={IMAGE}
              src={X_BUTTON_URL}
            />
          )}
        />
        <OverlayBanner
          src={this.props.imgs[this.state.centerImageIndex]}
          render={this.props.renderBanner}
          index={this.state.centerImageIndex}
          imgs={this.props.imgs}
          displayCarouselButtons={this.props.displayButtons}
          handleLeftClick={this.handleLeftClick}
          handleRightClick={this.handleRightClick}
        >
          {this.props.children}
        </OverlayBanner>
        {this.props.displayCarousel ? (
          <OverlayCarousel
            handleImageClick={this.handleImageClick}
            display={this.props.displayCarousel}
            imgs={this.props.imgs}
            render={this.props.renderCarousel}
          />
        ) : null}
      </OverlayContainer>
    );
  }
}

Overlay.defaultProps = {
  overlay: false,
  src: '/',
  imgs: [],
  displayCarousel: false,
  displayButtons: true,
  render: () => null,
  renderBanner: () => null,
  renderCarousel: () => null,
};