enyo-cordova
============
Build a platform specific `apache-cordova` build using `enyo-dev` packager. 

How to use
----------

Include `enyo-cordova` in your project's `lib` directory.

    #From root of project directory
    cd lib && git submodule add https://github.com/enyojs/enyo-cordova.git

Then simply include the desire platform you are building the application for inside your `Enyo` project.
    
    require('cordova/webos');