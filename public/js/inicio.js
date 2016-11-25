window.addEventListener("load",splash);

function splash(){
	setTimeout(function(){
		window.location.assign('busqueda.html');
		navigator.vibrate(500);
	},1500);
}