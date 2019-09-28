var img= document.getElementById("imagen");



var serie =prompt ("que serie te cabe");

if (serie=="dbz"){
document.getElementById("titulo").innerHTML = serie
img.src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/p/portada-dbz-homenaje.jpg";
document.getElementById("parrafo").innerHTML = "aguante dbz gato"
}else if (serie=="samurai x"){

document.getElementById("titulo").innerHTML = serie
img.src="http://1.bp.blogspot.com/-PbGprly4yAo/T1YWpdC_pWI/AAAAAAAAGR8/g7ohwQQdpTs/s320/samurai.jpg";
document.getElementById("parrafo").innerHTML = "aguante samuraiX gato"
}else {
alert ("eliga entre dbz o samura x");
}