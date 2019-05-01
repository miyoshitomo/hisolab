var pt;	//動く点（配列）
var speed = 50;
var dotcount = 20;
var dotlevel = 6;

var status ="wait";

function setup(){
	pt = new Array();
	var width = document.getElementById('pbCanvas').width;
	for (var j = 0;j<dotlevel;j++){
		var pttmp = new Array();
		for (var i = 0;i<dotcount;i++){
			pttmp.push(new PhysicalPoint(width/2, width/2));
		}
		pt.push(pttmp);
	}
//	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
}
function loop(){
	if (status != 'start'){
		return;
	}
	//加速
	for (var j = 0;j<dotlevel;j++){
		for (var i = 0;i<dotcount;i++){
			pt[j][i].setKasokudo(
			speed * Math.cos(i/dotcount*2 * Math.PI) * (j+1)*0.5, 
			speed * Math.sin(i/dotcount*2 * Math.PI) * (j+1)*0.5);
		}
	}

	//描画
	pbCtx.clearRect(0, 0, screenWidth, screenHeight);
	for (var j = 0;j<dotlevel;j++){
		if (j%3 == 0){
			pbCtx.fillStyle = 'rgb(' + document.getElementById('color1').value + ')';
		} else if (j%3 == 1){
			pbCtx.fillStyle = 'rgb(' + document.getElementById('color2').value + ')';
		} else {
			pbCtx.fillStyle = 'rgb(' + document.getElementById('color3').value + ')';
		}
		for (var i = 0;i<dotcount;i++){
			pbCtx.beginPath();
			pbCtx.arc(pt[j][i].x, pt[j][i].y, 6, 0, Math.PI*2, true);
			pbCtx.fill();
		}
	}
}

function onPressed(n){
	
}

function onMove(n){
	
}

function onReleased(n){
	
}
