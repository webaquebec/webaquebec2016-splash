// Project
var OPWAQ16 = require('./project.js');

// Helpers
var Helpers = require('./helpers');

// Webfont
var Webfont = require('./modules/webfont.js');
OPWAQ16.Webfont = Webfont({
    fonts: ['Titillium+Web:300', 'Titillium+Web:400', 'Titillium+Web:600', 'Titillium+Web:700']
});

// Paralax
var Paralax = require('./modules/paralax.js');
OPWAQ16.Components.paralax = Paralax($('.paralax-viewport'));

// Counter
var Counter = require('./modules/counter.js');
OPWAQ16.Components.counter = Counter($('.counter'));