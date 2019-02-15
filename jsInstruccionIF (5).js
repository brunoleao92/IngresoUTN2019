function Mostrar()
{
//tomo la edad 
var edad;
var noado;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
noado=(edad<13) || (edad>17);
if(noado){
	alert("usted no es un adolescente");
}


}//FIN DE LA FUNCIÓN
