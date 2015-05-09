var foretold;
function preload() {
	backgroundImage = loadImage('assets/ulukator1.jpg');
	bubble1 = loadImage('assets/bubble1.png');
	bubble2 = loadImage('assets/bubble2.png');
	bubble3 = loadImage('assets/bubble3.png');
}

function setup() {
	var screenSize;
	viewPosition = createVector(0, 0);

	if (window.innerWidth > window.innerHeight) {
		screenSize = Math.min(200, window.innerHeight / 3);
		createCanvas(screenSize * 4, screenSize * 3);
	} else {
		screenSize = Math.min(200, window.innerWidth / 4);
		createCanvas(screenSize * 4, screenSize * 3);
	}


}

function draw() {
	drawUlyuLu();

	if (mouseInside(mouseX, mouseY)) {
		cursor(HAND);
	} else {
		cursor(ARROW);
	}

	if (foretold === 0) {
		image(bubble1, 11*width/20, 3*height/20, 7*width/20, 5*height/20);
	} else if (foretold === 1) {
		image(bubble2, 11*width/20, 4*height/20, 7*width/20, 5*height/20);
	} else if (foretold === 2) {
		image(bubble3, 11*width/20, 5*height/20, 7*width/20, 5*height/20);
	}
}

function drawUlyuLu() {
	background(backgroundImage);
	//rect(8*width/20, 11*height/20, 3.5*width/20, 3*height/20);
}

function mouseInside(x, y) {
	if (x >= 8*width/20 && x <= 8*width/20 + 3.5*width/20 && y >= 11*height/20 && y <= 11*height/20 + 3*height/20) {
		return true;
	}
	 return false;
}


function foretell() {
	foretold = Math.floor(random(0, 3));
}

function mouseClicked(event) {
	if (mouseInside(mouseX, mouseY)) {
		foretell();
	}
	
	event.preventDefault();
	return false;
}

function touchEnded(event) {
	if (mouseInside(touchX, touchY)) {
		foretell();
	}
	event.preventDefault();
	return false;
}