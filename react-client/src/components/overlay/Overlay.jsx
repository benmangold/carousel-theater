import React from 'react';

import {
  Overlay,
  ContentContainer,
  CarouselContainer,
  ButtonLeft,
  ButtonRight,
} from '../styled-components/overlay/OverlayStyles.jsx';

import OverlayHeader from './OverlayHeader.jsx';
import OverlayBanner from './OverlayBanner.jsx';
import OverlayCarousel from './OverlayCarousel.jsx';

class GalleryOverlay extends React.Component {
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
      <Overlay overlay={this.props.overlay}>
        <CarouselContainer>
          
          <OverlayHeader handleExit={this.props.handleExit} />

          <ContentContainer>
            <OverlayBanner
              src={this.props.imgs[this.state.centerImageIndex]}
              render={this.props.renderBanner}
              index={this.state.centerImageIndex}
              imgs={this.props.imgs}
            />

            <ButtonLeft
              onClick={this.handleLeftClick}
              type='image'
              src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
            />

            <ButtonRight
              onClick={this.handleRightClick}
              type='image'
              src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png'
            />

            <OverlayCarousel
              handleImageClick={this.handleImageClick}
              imgs={this.props.imgs}
              render={this.props.renderCarousel}
            />
          </ContentContainer>
        </CarouselContainer>
      </Overlay>
    );
  }
}

GalleryOverlay.defaultProps = {
  overlay: false,
  src: '/',
  imgs: [],
};

export default GalleryOverlay;
