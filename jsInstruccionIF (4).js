function Mostrar()
{
//tomo la edad  

var edad;
var adolescente;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
adolescente=(edad>=13) && (edad<=17);
if(adolescente){alert("Usted es un adolescente");}

}//FIN DE LA FUNCIÓN