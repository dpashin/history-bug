# Can not bundle package using webpack 2

Hi.
Now i'm using html5-history-api and webpack 1.14.0, and all works fine.
I've tried to upgrade webpack to 2.x and got error "Uncaught ReferenceError: Invalid left-hand side in assignment"

Seems that webpack rewrites this code and something goes wrong.

    (function(factory) {
      if (typeof define === 'function' && define['amd']) {
        if (typeof requirejs !== 'undefined') {
          // https://github.com/devote/HTML5-History-API/issues/73
          var rndKey = '[history' + (new Date()).getTime() + ']';
          var onError = requirejs['onError'];
          factory.toString = function() {
            return rndKey;
          };
          requirejs['onError'] = function(err) {         // <==== ERROR HERE
            if (err.message.indexOf(rndKey) === -1) {
              onError.call(requirejs, err);
            }
          };
        }
        define([], factory);
      }


Steps to reproduce:
1. git clone git@github.com:dpashin/history-bug.git
2. npm i
3. node node_modules/webpack/bin/webpack.js
4. open index.html in browser and you will see error in console