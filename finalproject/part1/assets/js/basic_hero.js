(function (window) {
	function Hero(image) {
		this.initialize(image);
	}
	Hero.prototype = new Bitmap();

	// save the original initialize-method so it won't be gone after
	// overwriting it
	Hero.prototype.Bitmap_initialize = Hero.prototype.initialize;

	// initialize the object
	Hero.prototype.initialize = function (image) {
		this.Bitmap_initialize(image);
		this.name = 'Hero';
		this.snapToPixel = true;
	}

	// we will call this function every frame to 
	Hero.prototype.tick = function () {
		this.y += 1;
	}

	// this will reset the position of the hero
	// we can call this e.g. whenever a key is pressed
	Hero.prototype.reset = function() {
		this.y = 0;
	}

	window.Hero = Hero;
} (window));