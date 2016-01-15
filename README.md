
# Requirements

### To build in your environment:

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

# Build Project
*To build your project successfully, make sure your have everything installed properly from Requirements section, or following steps will fail.*

Before building your project, you might want to explicitly specify which environment you want to build, ```development```, ```production``` or ```testing```
This will affect which libraries will be installed by ```npm``` tool and which ports will be used for the project, as well as some other project settings.

To specify environment, you need to set ```NODE_ENV``` variable to the environment you want. E.g.:

```
export NODE_ENV=development
```

If you did not specify any values for ```NODE_ENV``` it will fall back to ```development``` by default.

### Build in local environment:

**Inside your project folder, execute following commands in order:**


Install necessary node modules:
```
[sudo] npm install
```

Install necessary bower libraries:
```
bower install
```

### Build in Vagrant environment:

Bring vagrant environment up and provision it with ```environment.sh```:
```
vagrant up
```

This step will take a while on first provisioning, it will download Ubuntu 14.04 environment and then provision it (~30 min). Get a coffee or something stronger. Once it is done, your project will be running at http://10.10.10.10:9000/

To manage your vagrant environment, you can ssh into it using:

```
vagrant ssh
```

### Build minified distribution:

Wipe old generated `dist` directory while keeping the `.git` to preserve your remotes configuration. Concat all the scripts and vendors in one minified `.js` file, same thing for your styles. Rev all resources for caching purposes; copy the server part.

```
gulp build
```

# Run project
*To run project, you need to complete all the steps from Build Project section, or it will fail otherwise.*

### In Development Mode:

**Default task, run the server.** Build `sass` files, inject all scripts and styles to the project, watch them and reload on change. Uses ```NODE_ENV``` to determine running environment.
```
gulp
```

### In Production

**Run server and dont watch for file changes.** Uses ```NODE_ENV``` to determine running environment.
```
npm start
```

# Test Project
*Some of the following commands require project to be running already in order to be tested successfully. For example, e2e tests will look for project running in ```development``` mode on port ```9000```.*

### Running Unit Tests

Launch client and server tests, using Karma and Mocha, both by default. You don't need server to be running.
```
gulp test [--client || --server]
```

Unit tests are located in the folders relevant to items checked, and have naming format of ```*.spec.js```.

### Running e2e Tests

Running e2e requires standalone install of Selenium and relevand webdriver for your browser. Both of them can be installed using following gulp task. You only need to run it once:

```
gulp e2e:update
```

Once you have that, you can run e2e tests using:

```
gulp e2e
```

**Note**: *Running e2e tests requires project to be running in ```development``` mode on port ```9000```. Make sure you start project before attempting to run e2e tests, or they will fail.*

### Syntax Validation

Validate javascript files through [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/).

```
gulp control
```

# Utility

Bump versions of `package.json` and `bower.json` files using *Semantic Versioning* and commit them. Default to **patch**.
```
gulp bump [--major || --minor || --patch]
```
