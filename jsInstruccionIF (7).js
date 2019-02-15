function Mostrar()
{
//tomo la edad  
var edad;
var div;
var cas;
var dj;

edad=document.getElementById("edad").value;
div=document.getElementById("estadoCivil").value;
cas=document.getElementById("estadoCivil").value;
edad=parseInt(edad);
dj=((div=="Divorciado") || (cas=="Casado")) && (edad<18);

if(dj){
	alert("es muy pequeño para NO ser soltero");
}


}//FIN DE LA FUNCIÓN