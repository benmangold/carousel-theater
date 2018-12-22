import React from 'react';
import ReactDom from 'react-dom';
import ProductGallery from './components/ProductGallery.jsx';

const Pg = () => <ProductGallery/>;

ReactDom.render(<Pg/>, document.getElementById('gallery'));
