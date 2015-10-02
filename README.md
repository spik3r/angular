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


Environment
--

Environment that project is executed in is specified in the
**NODE_ENV** environment variable. 

If your NODE_ENV is not set, it would be set to 'development' by default.

To check what your NODE_ENV is set to, you can execute the following:

`echo $NODE_ENV`

To set your NODE_ENV to specific environment, use the following command:

`export NODE_ENV=[environment]`

where *[environment]* can be set to:

1. *production*
    - build server in the deployment folder and run on port 80. Uglify and minify everything possible on              build.
2. *testing*
    - run all tests, and if everything is fine - build and continue in development mode.
3. *development*
    - build server without making JS files ugly etc, but still build using RequireJS builder on updates.


Build Process
-- 

*Grunt section*

1. Lint javascript files
2. Remove build folder if already exists
3. Preprocess files before building
4. Minify HTML
5. Minify CSS
6. Build project using RequireJS
7. Cleanup after RequireJS has been built
8. Copy files into build folder.

*Grunt section end*

*Gulp section*

1. Watch files and rebuild on update
2. Start nodemon server to serve files from /build

*Gulp section*

Development
--


** Build and run project in development mode **

`gulp`

** Run project tests **

`gulp test`

** Bump project minor version **

`gulp version`

** Bump project version and commit to git repository **

`gulp bump`

** Remove build/ and dist/ folders ** 

`gulp clean`


Deployment
--

** Build project without running local server **

`gulp build`

** Create a project distribution **

`gulp deploy`


References
--
1. [Angular](https://angularjs.org/)
2. [Yeoman](http://yeoman.io/)
3. [Bangular Generator](http://bangular.io/)
4. [RequireJS](http://www.requirejs.org/)
5. [AngularAMD](https://github.com/marcoslin/angularAMD)
6. [AngularAMD sample project](https://github.com/marcoslin/angularAMD-sample)
