

function startClock(){
	setInterval(tickClock, 1000);
}

function tickClock(){
	var d = new Date();

	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	var localOffset = d.getTimezoneOffset() * 60000;

	var utc = d.getTime() + localOffset;
	var offset = -4;
	var NYC = utc + (36000 * offset);
	var nycTZ = new Date(NYC);
	

	if (seconds <= 9){
		seconds = "0"+seconds;
	}


	document.getElementById("clock").innerHTML = hours+" : "+minutes+" : "+seconds;

	document.getElementById("seconds").style.transform = "rotate(" + (d.getSeconds() * 6) + "deg)";

	document.getElementById("minutes").style.transform = "rotate(" + (d.getMinutes() * 6) + "deg)";
	document.getElementById("hours").style.transform = "rotate(" + (d.getHours() * 30) + "deg)";

	document.getElementById("seconds3").style.transform = "rotate(" + (nycTZ.getSeconds() * 6) + "deg)";

	document.getElementById("minutes3").style.transform = "rotate(" + (nycTZ.getMinutes() * 6) + "deg)";
	document.getElementById("hours3").style.transform = "rotate(" + (nycTZ.getHours() * 30) + "deg)";

}