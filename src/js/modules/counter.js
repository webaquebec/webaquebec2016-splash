// ------------------------------- //
//             Counter             //
// ------------------------------- //

/*

852

participants

56

conférences

7

keynotes

5

salles

thématiques

3

jours

97%

taux de 

satisfaction

100kg

de fromage

60kg

de saucisses

2400

lunchs

60

bénévoles

WAQ 2015 

en chiffres

*/

var $ = require('jquery');

function Counter(obj, config) {
    this.counter = obj;
    this.config = $.extend({}, config);
    
    this.stats = [
    	{
    		'number' : 3,
    		'text' : "jours de conférences"
    	},
		{
			'number' : 7,
			'text' : "salles thématiques"
		},
		{
			'number' : 900,
			'text' : "participants"
		},
		{
			'number' : 60,
			'text' : "conférences"
		},
		{
			'number' : 6,
			'text' : "keynotes"
		},
		{
			'number' : 97,
			'text' : "% taux de satisfaction"
		},
		{
			'number' : 2400,
			'text' : "lunchs"
		},
		{
			'number' : 60,
			'text' : "bénévoles"
		},
    ]
    
    this.currentIndex = 1;

    this.init();
}

$.extend(Counter.prototype, {
    init: function() {
    	self = this;
    	setTimeout(function(){
	    	self.setText();
    	}, 5000);
    },
    randomNumbers: function(duration,callback){
    	
    	if(!self)
    		self = this
    		
    	var randoms = setInterval(function(){
    	
    		self.counter.find('.odometer').addClass('digits-3');
    	
	    	self.counter.find('.digit:nth-child(1) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
	    	self.counter.find('.digit:nth-child(2) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
	    	self.counter.find('.digit:nth-child(3) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
	    	self.counter.find('.digit:nth-child(4) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
	    	self.counter.find('.digit:nth-child(5) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
	    	self.counter.find('.digit:nth-child(6) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
	    	
	    	self.counter.find('.digit:nth-child(1) ul').addClass('goto-'+(Math.floor(Math.random() * 6) + 1 ));
	    	self.counter.find('.digit:nth-child(2) ul').addClass('goto-'+(Math.floor(Math.random() * 6) + 1 ));
	    	self.counter.find('.digit:nth-child(3) ul').addClass('goto-'+(Math.floor(Math.random() * 6) + 1 ));
	    	self.counter.find('.digit:nth-child(4) ul').addClass('goto-'+(Math.floor(Math.random() * 6) + 1 ));
	    	self.counter.find('.digit:nth-child(5) ul').addClass('goto-'+(Math.floor(Math.random() * 6) + 1 ));
	    	self.counter.find('.digit:nth-child(6) ul').addClass('goto-'+(Math.floor(Math.random() * 6) + 1 ));
    	
    	}, 250);
    	
    	setTimeout(function(){
    		clearInterval(randoms);
    		if(callback)
	    		callback();
    	}, duration)
    },
    setText: function(){
    	
    	if(!self)
    		self = this
    		
    	console.log(self);
    	
    	self.counter.find('.text').width(self.counter.find('.text span').width());
    	setTimeout(function(){
    		self.counter.find('.text').addClass('change');
    	}, 100);
    	
    	self.randomNumbers(2000, function(){
    		var stat = self.stats[self.currentIndex];
    		var number = stat.number.toString()
    		var nbDigits = number.length;
    		
    		var digit1 = number.charAt(0);
    		var digit2 = (nbDigits>1?number.charAt(1):0);
    		var digit3 = (nbDigits>2?number.charAt(2):0);
    		var digit4 = (nbDigits>3?number.charAt(3):0);
    		var digit5 = (nbDigits>4?number.charAt(4):0);
    		var digit6 = (nbDigits>5?number.charAt(5):0);
    		console.log(digit1,digit2,digit3,digit4,digit5,digit6)
    		
    		self.counter.find('.odometer').removeClass('digits-1 digits-2 digits-3 digits-4 digits-5 digits-6');
    		self.counter.find('.odometer').addClass('digits-'+nbDigits);
    		
    		self.counter.find('.digit:nth-child(1) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
    		self.counter.find('.digit:nth-child(2) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
    		self.counter.find('.digit:nth-child(3) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
    		self.counter.find('.digit:nth-child(4) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
    		self.counter.find('.digit:nth-child(5) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
    		self.counter.find('.digit:nth-child(6) ul').removeClass('goto-0 goto-1 goto-2 goto-3 goto-4 goto-5 goto-6 goto-7 goto-8 goto-9');
    		
    		self.counter.find('.digit:nth-child(1) ul').addClass('goto-'+digit1);
    		self.counter.find('.digit:nth-child(2) ul').addClass('goto-'+digit2);
    		self.counter.find('.digit:nth-child(3) ul').addClass('goto-'+digit3);
    		self.counter.find('.digit:nth-child(4) ul').addClass('goto-'+digit4);
    		self.counter.find('.digit:nth-child(5) ul').addClass('goto-'+digit5);
    		self.counter.find('.digit:nth-child(6) ul').addClass('goto-'+digit6);
    		
    		self.counter.find('.text span').text(stat.text);
    		self.counter.find('.text').width(self.counter.find('.text span').width());
    		self.counter.find('.text').removeClass('change');
    		
    		if(self.currentIndex == self.stats.length-1){
    			self.currentIndex = 0;
    		}
    		else{
    			self.currentIndex++;
    		}
    		
    		setTimeout(function(){
    			self.setText();
    		}, 5000)
    	});
    }
});

module.exports = function(obj, config) {
    return obj.map(function(index, element) {
        return new Counter($(element), config);
    });
};
