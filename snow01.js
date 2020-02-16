var pt;

var speed = 1;
var dotcount = 100;
var dotByLine = 10;


var status ="wait";

function setup(){
	dotcount = parseInt(document.getElementById('dropcount').value);
	speed = parseInt(document.getElementById('dropspeed').value);
	pt = new Array();
	for (var j = 0;j<dotcount;j++){
		setDrop(j, true);
	}

	status = 'start';
	intervalId = setInterval(loop, 50);	//1秒20コマ
}
function loop(){
	if (status != 'start'){
		clearInterval(intervalId);
		return;
	}
	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);

	pbCtx.fillStyle = 'rgb(255,255,255)';
	for (var j = 0;j<dotcount;j++){
		if (pt[j].y >= screenHeight){
			setDrop(j, false);
		}
		pbCtx.beginPath();
		pbCtx.arc(pt[j].x, pt[j].y, 1, 0, Math.PI*2, true);
		pbCtx.fill();

		pt[j].y = pt[j].y + pt[j].speed;
	}
}
function setDrop(aryNum,isInit){
	var xkan = screenWidth/(dotByLine);
	if (isInit){
		pt[aryNum] = {
			'x' :xkan * ((aryNum%dotByLine)) + (Math.random()*xkan),
			'y' :Math.random() * screenHeight,
			'speed' : speed};
//			'speed' : speed * (0.8 + Math.random()*0.4)};
	} else {
		pt[aryNum] = {
			'x' :xkan * ((aryNum%dotByLine)) + (Math.random()*xkan),
			'y' :Math.random() * -10, 
			'speed' : speed};
	}
}


//この先共通初期設定
var pbCanvas,pbCtx,screenWidth,screenHeight,intervalId;

onload = function() {
	pbCanvas = document.getElementById('pbCanvas');
	if ( ! pbCanvas || ! pbCanvas.getContext ) {
		return false;
	}
	pbCtx = pbCanvas.getContext('2d');
	screenWidth = pbCanvas.width;
	screenHeight = pbCanvas.height;
};


