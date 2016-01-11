start_time=$(date +%s)
printf "==============================="
printf "==== Fix console errors... ===="
printf "==============================="
export DEBIAN_FRONTEND=noninteractive
dpkg-reconfigure locales
sed -i 's/^mesg n$/tty -s \&\& mesg n/g' /root/.profile

printf " ============================="
printf " ==== Configure locale... ===="
printf " ============================="
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
sudo rm -v /etc/apt/apt.conf.d/70debconf
sudo locale-gen en_US.UTF-8
sudo apt-get install -y language-pack-en
echo 'LC_ALL="en_US.UTF-8"'  >  /etc/default/locale
sudo touch /var/lib/cloud/instance/locale-check.skip

printf "==========================="
printf "==== Installing Git... ===="
printf "==========================="
sudo apt-get install git -y

printf "========================================"
printf "==== Installing Build Essentials... ===="
printf "========================================"
sudo apt-get -y install build-essential

node_start_time=$(date +%s)
printf "============================"
printf "==== Installing Node... ===="
printf "============================"
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
npm rebuild node-sass
node_finish_time=$(date +%s)
echo "INFO: Node installed in: $(( $((node_finish_time - node_start_time)) /60 )) min. ($((node_finish_time - node_start_time)) secs.)"

gulp_start_time=$(date +%s)
printf "============================"
printf "==== Installing Gulp... ===="
printf "============================"
sudo npm install -g gulp
gulp_finish_time=$(date +%s)
echo "INFO: Gulp installed in: $(( $((gulp_finish_time - gulp_start_time)) /60 )) min. ($((gulp_finish_time - gulp_start_time)) secs.)"


bower_start_time=$(date +%s)
printf "============================="
printf "==== Installing Bower... ===="
printf "============================="
sudo npm install -g bower
bower_finish_time=$(date +%s)
echo "INFO: Bower installed in: $(( $((bower_finish_time - bower_start_time)) /60 )) min. ($((bower_finish_time - bower_start_time)) secs.)"


phantom_start_time=$(date +%s)
printf "================================="
printf "==== Installing PhantomJS... ===="
printf "================================="
sudo npm install -g phantomjs --phantomjs_cdnurl=http://cnpmjs.org/downloads
phantom_finish_time=$(date +%s)
echo "INFO: PhantomJS installed in: $(( $((phantom_finish_time - phantom_start_time)) /60 )) min. ($((phantom_finish_time - phantom_start_time)) secs.)"


yeoman_start_time=$(date +%s)
printf "=============================="
printf "==== Installing Yeoman... ===="
printf "=============================="
sudo npm install -g yo
yeoman_finish_time=$(date +%s)
echo "INFO: Yeoman installed in: $(( $((yeoman_finish_time - yeoman_start_time)) /60 )) min. ($((yeoman_finish_time - yeoman_start_time)) secs.)"

generator_start_time=$(date +%s)
printf "======================================="
printf "==== Downloading Mean Generator... ===="
printf "======================================="
cd /home/vagrant
git clone https://github.com/camomiles/mean-generator generator

printf "==================================="
printf "==== Linking Mean Generator... ===="
printf "==== (this takes some time)    ===="
printf "==================================="
cd /home/vagrant/generator
sudo npm link
generator_finish_time=$(date +%s)
echo "INFO: Generator built in: $(( $((generator_finish_time - generator_start_time)) /60 )) min. ($((generator_finish_time - generator_start_time)) secs.)"


# This takes a while to run, only uncomment it if you are ready
# to wait ~5-10 minutes with no notifications in command line:
project_start_time=$(date +%s)
printf "============================== "
printf "==== Building Project...  ==== "
printf "==== (takes some time)    ===="
printf "============================== "
cd /home/vagrant/src
sudo npm install 
bower install --config.interactive=false --allow-root
npm rebuild node-sass
project_finish_time=$(date +%s)
echo "INFO: Project built in: $(( $((project_finish_time - project_start_time)) /60 )) min. ($((project_finish_time - project_start_time)) secs.)"

# printf " ====================================== "
# printf " ==== Running Project in Screen... ==== "
# printf " ====================================== "
# screen -d -m -L gulp
printf "====================================================="
printf "====         YOUR NEW PROJECT IS READY!          ===="
printf "==== "
### Comment this part out if you uncommented project build
printf "==== Run following commands to run your project: ===="
printf "====    0. vagrant ssh                           ===="
printf "====    1. cd /src                               ===="
# printf "====    2. npm install                           ===="
# printf "====    3. bower install                         ===="
printf "====    2. gulp                                  ===="
### 
printf "===================================================="
finish_time=$(date +%s)
echo "INFO: Total time taken: $(( $((finish_time - start_time)) /60 )) min. ($((finish_time - start_time)) secs.)"