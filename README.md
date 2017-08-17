# NO FRILLS: SSR REACT REACT-ROUTER NODE BOILERPLATE APP

This is a basic isomorphic boilerplate app, built with react, react-router, node/express, ES6 and serverside rendering with data on initialisation.

[You can see my tutorial here](#https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a)

Note: As typically my projects don’t expand the server side that significantly, i.e. the server doesn’t have that many modules, I don’t see much benefit in using webpack to bundle it into one file. So I have used babel to transpile the server and webpack for the client.

My next tutorial will be extending this boilerplate to use redux and for the store to be created with an initial state.

### install

* `npm i` - install dependencies

### run in dev

* `npm run build:watch` - runs babel to transpile the server from es6 to es5 (watch mode)
* `npm run build:watch:client` - runs webpack to build bundle (watch mode)
* `npm run start:dev` - in parallel shells it calls `build:watch:client` `build:watch:server` and then runs the app in watch mode, using nodemon

### prod

* `npm run build` - runs babel to transpile the server from es6 to es5 
* `npm run build:client` - runs webpack to build bundle
* `npm run build:prod` - builds both client and server
* `npm run start` - it calls `build:prod` and then runs the app 
