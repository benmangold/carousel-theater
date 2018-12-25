# carousel-theater image gallery

## by Ben Mangold

A full stack image gallery component with image carousel implemented in React

A web service and db are provided with scripts to seed the db and serve the component

React, Node.js, MongoDB

[demo video](https://www.dropbox.com/s/cafa5zd62a5vj3p/carousel-overlay-demo.mov?dl=0)

[gist with sample request](https://gist.github.com/benmangold/e686d23d396359a2a1314d489b799cbd)

## Continuing Development

Occurs on dev branch, which will periodically PR into master

Branch off of dev, naming the branch after a ticket on trello

[trello task board](https://trello.com/b/klbDbr5E/dd-gallery)

## Component Usage

Overlay Provider

```javascript
<OverlayProvider>
  <div>Hi 1</div>
  <div>Hi 2</div>
  <div>Hi 3</div>
  <img src='https://i.imgur.com/K9PPMZK.jpg' />
</OverlayProvider>
```

Overlay Renderer

```javascript
<OverlayRenderer
  // overlay trigger
  render={() => <div>Click me</div>}
  // overlay content
  renderBanner={() => <div>Big image</div>}
  renderCarousel={() => [<div>Carousel List</div>]}
/>
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

`databse: deltaDrop`
`collection: products`

```
$ npm run seed
```

## Web Service Deployment

Required: DB_PROVIDER env variable must be available in production enviornment, pointing to prodcution db

```
ex on ec2: ec2-instance$ export DB_PROVIDER=mongodb://<un>:<pw>@ds249583.mlab.com:49583/delta-drop
```
