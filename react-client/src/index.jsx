import React from 'react';
import ReactDom from 'react-dom';
import ProductGallery from './components/productGallery/index.jsx';

import OverlayProvider from './components/overlay/OverlayProvider.jsx'
import OverlayRenderer from './components/overlay/OverlayRenderer.jsx'

ReactDom.render(<ProductGallery/>, document.getElementById('gallery'));

export {
  OverlayProvider, OverlayRenderer
}