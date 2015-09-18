// ------------------------------- //
//             Paralax             //
// ------------------------------- //

var $ = require('jquery');

function Paralax(obj, config) {
    this.paralaxViewport = obj;
    this.config = $.extend({}, config);

    this.init();
}

$.extend(Paralax.prototype, {
    bindEvents: function() {
		// Declare parallax on layers
		this.paralaxViewport.find('.parallax-layer').parallax({
			mouseport: this.paralaxViewport
		});
    }
});

module.exports = function(obj, config) {
    return obj.map(function(index, element) {
        return new Paralax($(element), config);
    });
};
