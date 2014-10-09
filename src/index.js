// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var AppView = require('./views/AppView');
var AppConfig = require('./AppConfig');

var mainContext = Engine.createContext();
var appView = new AppView(AppConfig);

mainContext.setPerspective(1000);
mainContext.add(appView);
