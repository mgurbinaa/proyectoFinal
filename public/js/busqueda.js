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
	if (contador > 0){
		for (var i = 0; i < contador; i++) {
			imagen = (localStorage.getItem("img"+i))?localStorage.getItem("img"+i):'public/img/def.svg';
			des = localStorage.getItem("descripcion"+i);
			lugares = (localStorage.getItem("marcadores"+(i+1)))?localStorage.getItem("marcadores"+(i+1)):0;
			cont.innerHTML += 
			'<div class="busqueda"><img  onclick="verImg(this)" src="'+imagen+'" class="imgBusqueda"><h1 id="'+(i+1)+'" onclick="cargarMapa(this.id)" class="descripcion">'+des+'</h1><div class="noti">'+lugares+'</div></div>';
		}
	}else{
		cont.innerHTML = "<h1>:'(</h1><p>No hay busquedas</p>";
	}
}
function cargarMapa(id){
	localStorage.setItem("actual",id);
	window.location.assign("mapa.html");
}
function verImg(foto){
	previa = document.getElementById("previa");
	img = previa.getElementsByTagName('img')[0];
	img.src = foto.src;
	previa.style.display = "block";
	previa.style.visibility = "visible";
}
function back(){
	previa = document.getElementById("previa");
	previa.style.display = "none";
	previa.style.visibility = "hidden";
}