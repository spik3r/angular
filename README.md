# Angular-seed [![Generated with](https://img.shields.io/badge/generated%20with-bangular-blue.svg?style=flat-square)](https://github.com/42Zavattas/generator-bangular)


Features:

* **Sub-generators** for `route`, `api`, `directive`, `service`, and plenty others...
* **[Express](https://github.com/strongloop/express) server** with nested routing architecture.
* **[Nodemon](https://github.com/remy/nodemon)** with **[LiveReload](https://github.com/vohof/gulp-livereload)** or **[BrowserSync](https://github.com/BrowserSync/browser-sync)** for the development process.
* **Automatic bower dependencies injection** on package install.
* **Test suite** — Unit tests with [Karma](https://karma-runner.github.io) & [Mocha](http://mochajs.org), e2e tests with [Protractor](https://github.com/angular/protractor).
* **[JSHint](https://github.com/jshint/jshint)** & **[JSCS](https://github.com/jscs-dev/node-jscs)** integration.
* **[Sass](https://github.com/sass/sass)** support.
* **Fast build**, like, real fast.

Optional:

* **sockets**, with [socket.io](https://github.com/Automattic/socket.io) and [angular-socket-io](https://github.com/btford/angular-socket-io)
* **authentication system**, with [Passport](https://github.com/jaredhanson/passport)
* **MongoDB**, with [Mongoose ODM](https://github.com/learnboost/mongoose)
* **mocked backend**, with [Restock](https://github.com/42Zavattas/Restock.io)
* **[SassDoc](https://github.com/SassDoc/sassdoc)** support

# Install

    npm install -g generator-bangular
    yo bangular

### Table of contents

- [Manage project](https://github.com/42Zavattas/generator-bangular#manage-project)
- [Generators](https://github.com/42Zavattas/generator-bangular#generators)
- [HOWTOs](https://github.com/42Zavattas/generator-bangular#howtos)
  - [Protractor](https://github.com/42Zavattas/generator-bangular#protractor)
  - [Sockets](https://github.com/42Zavattas/generator-bangular#sockets)
  - [Passport](https://github.com/42Zavattas/generator-bangular#passport)
- [Architecture](https://github.com/42Zavattas/generator-bangular#architecture)

# Manage project

    gulp

**Default task, run the server.** Build `sass` files, inject all scripts and styles to the project, watch them and open your default browser.

    gulp build

Wipe old generated `dist` directory while keeping the `.git` to preserve your remotes configuration. Concat all the scripts and vendors in one minified `.js` file, same thing for your styles. Rev all resources for caching purposes; copy the server part.

    gulp preview

Run the `gulp build` process and serve the `dist` directory.

    gulp test [--client || --server]

Launch client and server tests, using Karma and Mocha, both by default.

    gulp control

Validate the app through [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/).

    gulp bump [--major || --minor || --patch]

Bump versions of `package.json` and `bower.json` files using *Semantic Versioning* and commit them. Default to **patch**.

    gulp e2e

Launch your server and then run protractor tests. See [protractor howtos](https://github.com/42Zavattas/generator-bangular#protractor).

# Generators

 - Global
  - [app](https://github.com/42Zavattas/generator-bangular#app)
 - Client
  - [directive](https://github.com/42Zavattas/generator-bangular#directive)
  - [filter](https://github.com/42Zavattas/generator-bangular#filter)
  - [font](https://github.com/42Zavattas/generator-bangular#font)
  - [route](https://github.com/42Zavattas/generator-bangular#route)
  - [service / factory](https://github.com/42Zavattas/generator-bangular#service)
  - [style](https://github.com/42Zavattas/generator-bangular#style)
  - [animation](https://github.com/42Zavattas/generator-bangular#animation)
 - Server
  - [api](https://github.com/42Zavattas/generator-bangular#api)

## App

This is the main generator of Bangular, that will scaffold entierely your project based on your needs.

    yo bangular || yo bangular <appName>

**Backend type**: MongoDB / [Restock](https://github.com/42Zavattas/Restock.io) / Json<br>
**Modules**     : angular-cookies || angular-resource || angular-sanitize || angular-animate<br>
**Socket.IO**   : Do you want to integrate sockets in your app?


## Directive

    yo bangular:directive <name>

The **name** parameter is required. Directives will be generated at `client/directives/`. You can specify if your directive needs an html template or not.

## Filter

    yo bangular:filter <name>

The **name** parameter is required. Filters will be generated at `client/filters/`.

## Font

    yo bangular:font <name>

The **name** parameter is required. Fonts will generate a new folder in `client/assets/fonts/` and a `.scss` file importing all of these fonts in your app.
It will be imported in your `app.scss` file either on top of the file or after the `// imports` mark if specified.

## Route

    yo bangular:route <name>

**Url**: Client url to access the route.

The **name** parameter is required. This will create in `client/views/`:

    name
    ├ name.js
    ├ name.controller.js
    ├ name.spec.js
    ├ name.e2e.js
    └ name.html

## Service

    yo bangular:service <name>
    yo bangular:factory <name>

The **name** parameter is required. The service / factory and its spec file will be generated at `client/services/`.

## Style

    yo bangular:style <name>

**Inject**: If true, an `@import` will be added to the main *app.scss* file to add the style to your app.
You can specify the location of your new imports by adding a `// imports` in the file.

The **name** parameter is required. This will create a new `.scss` file in he `client/styles/` folder.

## Animation

    yo bangular:anim <name>

Creates an angular animation file in `client/animations/`.
You can choose which event(s) you want to capture, including `enter`, `leave`, `move`, `addClass`, `removeClass`.

You need to have `ngAnimate` as dependency.

## Api

    yo bangular:api <name>

**Url**: Route that will be exposed on your server to access this ressource.<br>
**Socket**: If you want to emit socket event on model changes (only with mongo & sockets).<br>
**Resource**: If you want to scaffold a basic `$resource` for this route (only with ngResource).

The **name** parameter is required. A **name** folder will be created at `server/api/`.