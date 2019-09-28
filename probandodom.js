//Va a salir un prompt 
//IF() perro 1 OR perro 2

//document.getElementById("imagen").src = "imagen.jpg";
//document.getElementById("titulo").innerHTML = "Nuevo titulo";
//document.querySelector("#titulo");
//document.querySelector(".titulo");

var opcion = prompt("Que perro?");
var titulo1 = "Perro 1";
var titulo2 = "Perro 2";

if(opcion == 1)
{
	//pero 1
	document.getElementById("titulo1").innerHTML = titulo1
	document.getElementById("titulo2").innerHTML = titulo2
	document.getElementById("parrafo").innerHTML = "Esto es el parrafo del perro 1";
	document.getElementById("imagen").src = "img/descarga.jpg";
}else if(opcion == 2){
	//perro 2
	document.getElementById("titulo1").innerHTML = titulo2
	document.getElementById("parrafo").innerHTML = "Esto es el parrafo del perro 2";
	document.getElementById("imagen").src = "img/perro2.jpg";
}else{
	alert("No");
}


var titulo = document.getElementById("titulo1").innerHTML;

var node = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode("(ok)");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("titulo1").appendChild(node);     // Append <li> to <ul> with id="myList"