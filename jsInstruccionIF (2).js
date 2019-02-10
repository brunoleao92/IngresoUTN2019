function Mostrar()
{
//tomo la edad  

var edad;
var adulto

edad=document.getElementById("edad").value;
edad=parseInt(edad);

adulto=edad>=18;
if (adulto)
 {alert("Usted es mayor de edad");
    
}
}//FIN DE LA FUNCIÓN