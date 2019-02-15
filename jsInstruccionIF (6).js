function Mostrar()
{
//tomo la edad  

var edad;
var niño;
var adulto;
var adolescente;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
niño=edad<=12;
adulto=edad>18;
adolescente=(edad>=13) && (edad<=17);
if (niño){
	alert("es un niño");
}

if(adulto){
	alert("es un adulto");

}
if(adolescente){
	alert("es un adolescente");
}

}//FIN DE LA FUNCIÓN
