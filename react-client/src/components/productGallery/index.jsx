/* render product images in a full screen overlay with a carousel */
/* fetches product data and renders product gallery */

import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import NotFound from './NotFound.jsx';

import OverlayRenderer from '../overlay/OverlayRenderer.jsx';
import ScrollOverProvider from '../scrollOver/ScrollOverProvider.jsx';

import { CarouselImage } from '../styled-components/CarouselStyles.jsx';

import { ButtonUp } from '../styled-components/ButtonStyles.jsx';

const Image = styled.img`
  width: 100%;
  max-height: 60%;
`;

const BannerContainer = styled.div`
  max-height: 1200px;
  width: 100%
  max-height: 60%
`;

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImg: '',
      carouselImgs: [],
      fourOhFour: false,
    };
  }

  componentDidMount() {
    let url = new URL(window.location.href);
    let productName = 'test1';
    if (url.pathname !== '/') {
      productName = url.pathname.split('/')[2];
    }

    axios
      .get(`/productImages/${productName}`)
      .then(res => {
        this.setState({
          bannerImg: res.data.bannerImageUrl,
          carouselImgs: res.data.images.split(','),
          fourOhFour: false,
        });
      })
      .catch(err => {
        if (err.message === 'Request failed with status code 404') {
          this.setState({
            fourOhFour: true,
          });
        } else {
          // console.error(err);
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.fourOhFour ? (
          <NotFound fourOhFour={this.state.fourOhFour} />
        ) : (
          <OverlayRenderer
            render={() => (
              <ScrollOverProvider size={'5vw'}>
                <BannerContainer>
                  <Image src={this.state.bannerImg} />
                </BannerContainer>
              </ScrollOverProvider>
            )}
            renderBanner={() => <Image src={this.state.bannerImg} />}
            renderCarousel={() =>
              this.state.carouselImgs.map((img, index, collection) => {
                return (
                  <ScrollOverProvider
                    zIndex={4}
                    render={() => (
                      <ButtonUp src='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png' />
                    )}
                  >
                    <CarouselImage key={index} src={img} />
                  </ScrollOverProvider>
                );
              })
            }
          />
        )}
      </div>
    );
  }
}

export default ProductGallery;
