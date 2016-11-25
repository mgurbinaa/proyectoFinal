window.addEventListener("load",splash);

function splash(){
	setTimeout(function(){
		navigator.vibrate(500);
		window.location.assign('busqueda.html');		
	},1500);
}