window.addEventListener("load",inicio);
if (!localStorage.getItem("contador")){
	localStorage.setItem("contador",0);
}
contador = localStorage.getItem("contador");
function buscar(){
	subir = confirm("Quieres agregar una fotografia?");
	descripcion = document.getElementById('bus');
	localStorage.setItem("descripcion"+contador,descripcion.value);
	contador++;
	localStorage.setItem("contador",contador);
	if (subir){
		window.location.assign("foto.html");
	}else{
		window.location.reload()
	}
	descripcion.value ="";
}
function inicio(){
	cont = document.getElementById("busquedas");
	cont.innerHTML ="";
	for (var i = 0; i < contador; i++) {
		imagen = (localStorage.getItem("img"+i))?localStorage.getItem("img"+i):'public/img/def.svg';
		des = localStorage.getItem("descripcion"+i);
		cont.innerHTML += 
		'<div id="'+contador+'" class="busqueda" onclick="cargarMapa(this.id)"><img src="'+imagen+'" class="imgBusqueda"><h1 class="descripcion">'+des+'</h1></div>';
	}
}
function cargarMapa(id){
	localStorage.setItem("actual",id);
	window.location.assign("mapa.html");
}