//var window = {};
//var fs = require('fs');
//eval(require('fs').readFileSync('scripts/datastore.js', 'utf8'));
//eval(require('fs').readFileSync('scripts/truck.js', 'utf8'));
//eval(require('fs').readFileSync('scripts/test_datastore.js', 'utf8'));
//eval(require('fs').readFileSync('scripts/test_truck.js', 'utf8'));

(function (window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var Datastore = App.Datastore;
  var myTruck = new Truck('ncc-1701', new Datastore());
  window.myTruck = myTruck;
})(window);

//eval(require('fs').readFileSync('scripts/datastore.js', 'utf8'));
