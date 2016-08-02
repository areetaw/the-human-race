


if ('ontouchstart' in document.documentElement) {
	canvas.addEventListener('touchstart', function(e) {
		handleKeyDown();
	}, false);
} else {
	document.onkeydown = handleKeyDown;
	document.onmousedown = handleKeyDown;
}



var random_images_array = ["assets/whitebitforeal.gif", "assets/latinxbit.gif", "assets/blackbit.gif","assets/asianbit.gif"];



var stage,
	canvas,
	hero,
	img = new Image();

function init() {
	canvas = document.createElement('canvas');
	canvas.width = getWidth();
	canvas.height = getHeight();
	document.body.appendChild(canvas);

	stage = new Stage(canvas);
	var randomnumber=Math.floor(Math.random()*4)
	img.onload = onImageLoaded;
	img.src = random_images_array[randomnumber];
}

function onImageLoaded(e) {
	hero = new Hero(img);
	stage.addChild(hero);
	// hero.reset();

	Ticker.setFPS(30);
	Ticker.addListener(tick);
}

// move the hero down by 1px
// and update/render the stage
function tick() {
	hero.tick();
	stage.update();
}

// whenever a key is pressed then hero's
// position will set to y=0;
function handleKeyDown(e)
{
	hero.reset();
}

init();


