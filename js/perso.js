//JavaScript source code
function mostraralerta(){
	alert("Mensaje interno de JavaScript");
}
function hacerclic(){
	var lista=document.getElementById('seccion').querySelectorAll("p");
	lista[0].onclick=mostraralerta;
	lista[1].onclick=mostraralerta;
	}
window.onload=hacerclic;
