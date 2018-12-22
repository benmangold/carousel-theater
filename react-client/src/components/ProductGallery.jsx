/* fetches product data to render cpt */

import React from 'react';
import axios from 'axios';

import EmbeddedImage from './EmbeddedImage.jsx';
import AbstractOverlay from './overlay/AbstractOverlay.jsx';
import NotFound from './styled-components/NotFound.jsx';

import { MagnifyingGlass } from './styled-components/GalleryStyles.jsx';

const MAGNIFYING_GLASS_URL =
  'https://image.flaticon.com/icons/svg/181/181561.svg';

const ProductImage = props => {
  return (
    <EmbeddedImage
      src={props.bannerImg}
      scrollOverDisplay={!props.scrollOverDisplay}
      renderScrollOverDisplay={() => {
        return <MagnifyingGlass src={MAGNIFYING_GLASS_URL} />;
      }}
    />
  );
};

const ProductBanner = () => {};
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
          throw err;
        }
      });
  }

  render() {
    return (
      <div>
        <NotFound fourOhFour={this.state.fourOhFour}>
          Not Found - Please Try Another Product
        </NotFound>
        <AbstractOverlay
          // carouselImgs={this.state.carouselImgs}
          render={() => {
            return (
              <ProductImage
                scrollOverDisplay={this.state.scrollOverDisplay}
                bannerImg={this.state.bannerImg}
              />
            );
          }}
          renderBanner={() => {
            return <EmbeddedImage src={this.state.bannerImg} />;
          }}
          renderCarousel={() => {
            this.state.carouselImgs.map((item, index, collection) => {
              return (
                <EmbeddedImage
                  src={item}
                  scrollOverDisplay={true}
                  renderScrollOverDisplay={() => {
                    return <MagnifyingGlass src={MAGNIFYING_GLASS_URL} />;
                  }}
                />
              );
            });
          }}
        />
      </div>
    );
  }
}

export default ProductGallery;
