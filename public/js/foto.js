window.addEventListener('load',inicio);
contador = localStorage.getItem("contador");

function inicio(){
	camamra = document.getElementById('camara');
	width = window.innerWidth;
	camara.style.height = width+"px";
	camara.style.top = "calc(50% - "+(width/2)+"px)";
	navigator.getUserMedia(
		{
			video:true
		},
		function(localMediaStream)
		{
			camara.src = window.URL.createObjectURL(localMediaStream);
		},
		function(err)
		{
			console.log('Error: '+err);
		}
	);
}

 function tomarFoto(){
	camara = document.getElementById('camara');
	img = getBase64Image(camara);
	localStorage.setItem("img"+(contador-1), img);
	verImg();
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0,img.clientWidth,img.clientHeight);

    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
function verImg(){
	previa = document.getElementById("previa");
	img = previa.getElementsByTagName('img')[0];
	img.src = localStorage.getItem("img"+(contador-1));
	previa.style.display = "block";
	previa.style.visibility = "visible";
}
function redo(){
	previa = document.getElementById("previa");
	previa.style.display = "none";
	previa.style.visibility = "hidden";
}
function guardar(){
	previa = document.getElementById("previa");
	previa.style.display = "none";
	previa.style.visibility = "hidden";
	window.location.assign("busqueda.html");	
}