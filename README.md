# overlay-theater image gallery

## reusable react components for web dev

## giving your components useful css via styled-components

## by Ben Mangold

Tools to build

Includes a full stack demo component
`/react-client/src/productGallery/ProductGallery.jsx`

A web service and db are provided with scripts to seed the demo db and serve the demo component

React, Node.js, MongoDB

[demo video](https://www.dropbox.com/s/cafa5zd62a5vj3p/carousel-overlay-demo.mov?dl=0)

[gist with sample request](https://gist.github.com/benmangold/e686d23d396359a2a1314d489b799cbd)

## Continuing Development

Occurs on dev branch, which will periodically PR into master

Branch off of dev, naming the branch after a ticket on trello

[trello task board](https://trello.com/b/klbDbr5E/dd-gallery)

## Component Usage

Scrollover Provider - display a centered image when moused over

```javascript
<ScrollOverProvider>
  <img src='https://i.imgur.com/ZfnIxu8.png' />
</ScrollOverProvider>
```

Overlay Provider - give each child a fullscreen overlay which displays the item when clicked

```javascript
<OverlayProvider>
  <div>Hi 1</div>
  <div>Hi 2</div>
  <div>Hi 3</div>
  <img src='https://i.imgur.com/K9PPMZK.jpg' />
</OverlayProvider>
```

Overlay Renderer - render a fullscreen overlay with a carousel functionality to view a list of items

```javascript
<OverlayRenderer
  // overlay trigger
  render={() => <div>Click me</div>}
  // overlay content
  renderBanner={() => <div>Big image</div>}
  renderCarousel={() => [
    <div>Carousel item 1</div>,
    <div>Carousel item 2</div>,
  ]}
/>
```

~TODO~
Carousel Provider - give each child a fullscreen carousel overlay with all other children

```javascript
<CarouselProvider>
  <div>Hi A</div>
  <div>Hi B</div>
  <div>Hi C</div>
</CarouselProvider>
```

## Running Web Service Locally

```
$ npm install
$ npm run server-dev
$ npm run react-dev
```

## Seed Local MongoDB

Make sure MongoDB is installed and running at mongodb://127.0.0.1:27017
The app is configured to use:

database: deltaDrop
collection: products

```
$ npm run seed
```

## Web Service Deployment

Required: DB_PROVIDER env variable must be available in production enviornment, pointing to prodcution db

```
ex on ec2: ec2-instance$ export DB_PROVIDER=mongodb://<un>:<pw>@ds249583.mlab.com:49583/delta-drop
```
