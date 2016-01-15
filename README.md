
# Requirements

## To build in your environment:

This project can be installed in two different ways. First way is to install it in your
home environment, which is a most convenient way to develop but requires initial setup.
You will require following tools to build project successfully, for reference look at ```environment.sh``` :

- [Node.JS v.5.x](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/)
- [PhantomJS](http://phantomjs.org/)

**Optional Tools:**

- [Yeoman](http://yeoman.io/)
- [Mean-Generator](https://github.com/camomiles/mean-generator)

On Linux machine, those tools can be installed using ```npm```

(you might need ```build-essential``` package):

```javascript
// Install Node
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
npm rebuild node-sass
// Install Gulp globally
sudo npm install -g gulp
// Install Bower globally
sudo npm install -g bower
// Install PhantomJS from CDN
sudo npm install -g phantomjs --phantomjs_cdnurl=http://cnpmjs.org/downloads
// Install Yeoman
sudo npm install -g yo
```

**Note:**
*If version number is not specified, assume the latest version*

## To build in Vagrant environment:

Another way to build and develop this project is using Vagrant environment provided with
this project. It lets you build new virtual environment for the project from scratch with
minimal initial setup, however it has its limitations too. For that option you will need:

- [VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/)


**Note:**
*If version number is not specified, assume the latest version*


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
