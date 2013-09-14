/*!
* urequire - version 0.6.0
* Compiled on 2013-09-24
* git://github.com/anodynos/urequire
* Copyright(c) 2013 Agelos Pikoulas (agelos.pikoulas@gmail.com )
* Licensed MIT http://www.opensource.org/licenses/mit-license.php
*/
var VERSION = '0.6.0'; //injected by grunt:concat
// Generated by CoffeeScript 1.6.3
var Urequire;

Urequire = (function() {
  function Urequire() {}

  Urequire.prototype.VERSION = typeof VERSION !== "undefined" && VERSION !== null ? VERSION : '{NO_VERSION}';

  Object.defineProperties(Urequire.prototype, {
    BundleBuilder: {
      get: function() {
        return require("./process/BundleBuilder");
      }
    },
    NodeRequirer: {
      get: function() {
        return require('./NodeRequirer');
      }
    },
    Bundle: {
      get: function() {
        return require("./process/Bundle");
      }
    },
    Build: {
      get: function() {
        return require("./process/Build");
      }
    },
    Module: {
      get: function() {
        return require("./fileResources/Module");
      }
    }
  });

  return Urequire;

})();

module.exports = new Urequire;
