menu = document.getElementById("menu");
menu.addEventListener('touchmove',mover);
menu.addEventListener('touchend',fin);
menu.addEventListener('touchstart',inicio)
var toqueInicial;

function verMenu(){
	menu.classList.toggle('verMenu');
}

function inicio(event){
	toqueInicial = event.targetTouches[0].pageX;

}

function mover(event){
	toque = event.targetTouches[0];
	menu.style.transition = "0s all";
	anchoMenu = menu.offsetWidth;
	dezp = (toqueInicial-toque.pageX)*(-1);
	if (dezp < 0){
		menu.style.marginLeft = ""+dezp+"px"
	}
}

function fin(event){
	menu.style.transition = "0.5s all";
	if (toque.pageX <25){
		menu.classList.toggle('verMenu');
		toque = "";
	}
	menu.style.marginLeft = "0px";

}