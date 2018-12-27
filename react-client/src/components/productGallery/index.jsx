/* fetches product data and renders product gallery */

import React from 'react';
import axios from 'axios';

import NotFound from './NotFound.jsx';

import OverlayRenderer from '../overlay/OverlayRenderer.jsx';
import OverlayProvider from '../overlay/OverlayProvider.jsx';

import ProductImage from './ProductImage.jsx';
import ProductBanner from './ProductBanner.jsx';
import ProductCarousel from './ProductCarousel.jsx';

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
        <NotFound fourOhFour={this.state.fourOhFour} />

        <OverlayRenderer
          render={() => (
            <ProductImage
              scrollOverDisplay={this.state.scrollOverDisplay}
              bannerImg={this.state.bannerImg}
            />
          )}
          renderBanner={() => (
            <ProductBanner bannerImg={this.state.bannerImg} />
          )}
          renderCarousel={() => (
            <ProductCarousel carouselImgs={this.state.carouselImgs} />
          )}
        />
      </div>
    );
  }
}

export default ProductGallery;
