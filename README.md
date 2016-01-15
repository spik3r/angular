
# Requirements: 

This project can be installed in two different ways. First way is to install it in your
home environment, which is a most convenient way to develop but requires initial setup.
You will require following tools to build project successfully, for reference look at ```environment.sh``` :

- Node.JS v.5.x
- Gulp and Bower
- PhantomJS

- *[OPTIONAL]* Yeoman
- *[OPTIONAL]* Mean-generator

Another way to build and develop this project is using Vagrant environment provided with
this project. It lets you build new virtual environment for the project from scratch with
minimal initial setup, however it has its limitations too. For that option you will need:

- VirtualBox
- Vagrant

# Install project

** First of all, install bower and gulp if you dont have it already on your machine **

    npm install gulp -g 
    npm install bower -g
    
** Install necessary node modules **

    [sudo] npm install

** Install necessary bower libraries **

    bower install

# Run project in development mode

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


# Protractor

## Install Selenium and Webdriver ##

    gulp e2e:update

## Run e2e tests ##

**1. Start web server in a separate tab**
	
	gulp

**2. Start e2e tests**

	gulp e2e
