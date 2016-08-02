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
		this.velocity = {x:0,y:25};
		this.onGround = false;
		this.doubleJump = false;
		this.jumpnumber = 0
		this.x = 250;
		this.y = 330;
		this.Bitmap_initialize(image);
		this.name = 'Hero';
		this.snapToPixel = true;
	}
	

	// we will call this function every frame to 
	Hero.prototype.tick = function () {
		if (this.y<330) {
		this.velocity.y += 1;
		this.y += this.velocity.y;
	}	else {
			this.jumpnumber = 0
	}}

	// this will reset the position of the hero
	// we can call this e.g. whenever a key is pressed
	Hero.prototype.reset = function() {
		if(this.jumpnumber == 0 || this.jumpnumber == 1) {
			
		this.velocity.y = -15;
		this.y += this.velocity.y
		this.jumpnumber += 1
	}}

	window.Hero = Hero;
} (window));


