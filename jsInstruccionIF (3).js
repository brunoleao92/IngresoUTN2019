function Mostrar()
{
//tomo la edad  
var edad
var menoredad
var mayoredad

edad=document.getElementById("edad").value;
edad=parseInt(edad);
menoredad=edad<18;
mayoredad=edad>=18;
if (menoredad) {alert("Usted es menor de edad");

    
} if(mayoredad){alert("Usted es mayor de edad");}

}//FIN DE LA FUNCIÓN