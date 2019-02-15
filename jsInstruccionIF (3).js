function Mostrar()
{
//tomo la edad  
var edad;
var mayoredad;
var menoredad;

edad=document.getElementById("edad").value;
edad=parseInt(edad);
mayoredad=edad>=18;
menoredad=edad<18;
if(mayoredad){
	alert("usted es mayor de edad");
}

if(menoredad){alert("usted es menor de edad");
	
}





}//FIN DE LA FUNCIÓN
