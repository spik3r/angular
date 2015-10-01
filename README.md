Angular-seed
====

This project is a seed project to start new Angular and RequireJS based
projects.
It is build by [Yeoman](http://yeoman.io/) build tool using
[Bangular](http://bangular.io/) generator.

Yeoman tool is not required to manage a project, but is still compatible for
most of the generator functions.

In order to proide support for lazy-loading of modules,
[RequireJS](http://www.requirejs.org/) is included into build process toghether
with an overlay tool [AngularAMD](https://github.com/marcoslin/angularAMD)
following an example [here](https://github.com/marcoslin/angularAMD-sample).

Prerequesites
--

1. Install [Node.js](https://nodejs.org/en/) (tested with v.0.12.7)
2. Install Bower, Grunt and Gulp build tools

    `npm install -g yo bower grunt-cli gulp`



Installation
--

** 1. Clone repository: **

`git clone https://bitbucket.org/guvera/angular-seed.git`

** 2. Install server-side dependencies **

`[sudo] npm install`

** 3. Install client-side dependencies **

`bower install`


Development
--

** Build and run project in development mode **

`gulp`

** Build project without running local server **

`gulp grunt`


Deployment
--

TODO Write project deployment instructions


References
--
[Angular](https://angularjs.org/)
[Yeoman](http://yeoman.io/)
[Bangular Generator](http://bangular.io/)
[RequireJS](http://www.requirejs.org/)
[AngularAMD](https://github.com/marcoslin/angularAMD)
[AngularAMD sample project](https://github.com/marcoslin/angularAMD-sample)
