# dd-Gallery
## by Ben Mangold

A fullscreen image gallery component with image carousel

React, Node.js, MongoDB

[demo video](https://www.dropbox.com/s/car3drvf8wecmhx/dd-gallery-screencap.mov?dl=0)

[gist with sample request](https://gist.github.com/benmangold/e686d23d396359a2a1314d489b799cbd)

# Dev Env Setup
## $ npm install
## $ npm run server-dev
## $ npm run react-dev

# Seed Local MongoDB
Make sure MongoDB is installed and running at mongodb://127.0.0.1:27017

databse: deltaDrop
collection: products
## $ npm run seed

## Required: DB_PROVIDER env variable must be available in production enviornment, pointing to prodcution db
### ex on ec2: ec2-instance$ export DB_PROVIDER=mongodb://<un>:<pw>@ds249583.mlab.com:49583/delta-drop

