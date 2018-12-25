import React from 'react';
import ReactDom from 'react-dom';
import ProductGallery from './components/productGallery/index.jsx';

import OverlayProvider from './components/overlay/OverlayProvider.jsx';
import OverlayRenderer from './components/overlay/OverlayRenderer.jsx';

ReactDom.render(
  <div>
    <ProductGallery />

    <OverlayRenderer
      // overlay trigger
      render={() => <div>Click me</div>}
      // overlay content
      renderBanner={() => <div>Big image</div>}
      renderCarousel={() => [<div>Carousel List</div>]}
    />

    <OverlayProvider>
      <div>Hi 1</div>
      <div>Hi 2</div>
      <div>Hi 3</div>
      <img src='https://i.imgur.com/K9PPMZK.jpg' />
    </OverlayProvider>
  </div>,
  document.getElementById('gallery')
);

export { OverlayProvider, OverlayRenderer };
