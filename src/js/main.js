// Project
var OPWAQ16 = require('./project.js');

// Helpers
var Helpers = require('./helpers');

// Webfont
var Webfont = require('./modules/webfont.js');
OPWAQ16.Webfont = Webfont({
    fonts: ['Roboto', 'Roboto:bold', 'Roboto:italic']
});

// Paralax
var Paralax = require('./modules/paralax.js');
OPWAQ16.Components.paralax = Paralax($('.paralax-viewport'));