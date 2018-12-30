import React from 'react';
import ReactDom from 'react-dom';
import ProductGallery from './components/productGallery/index.jsx';

import OverlayProvider from './components/overlay/OverlayProvider.jsx';
import OverlayRenderer from './components/overlay/OverlayRenderer.jsx';

import ScrollOverProvider from './components/scrollOver/ScrollOverProvider.jsx';

ReactDom.render(
  <div>
    <ProductGallery />

    <OverlayRenderer
      render={() => <div>Click me</div>} // overlay trigger
      renderBanner={() => <div>Big image</div>} // overlay content
      renderCarousel={() => [
        <div>Carousel List 1</div>,
        <div>Carousel List 2</div>,
      ]}
    />

    <OverlayProvider>
      <div>Hi 1</div>
      <div>Hi 2</div>
      <div>Hi 3</div>
      <img src='https://i.imgur.com/ZfnIxu8.png' />
    </OverlayProvider>

    <ScrollOverProvider size={'256px'}>
      <img src='https://i.imgur.com/ZfnIxu8.png' />
    </ScrollOverProvider>
  </div>,
  document.getElementById('gallery')
);

export { OverlayProvider, OverlayRenderer, ScrollOverProvider };
