function Mostrar()
{
//tomo la edad  

	var edad;
	var soltero;
	var synm;
	
	edad=document.getElementById("edad").value;
	soltero=document.getElementById("estadoCivil").value;
	edad=parseInt(edad);
	synm=(soltero="Soltero") && (edad>17);
	if(synm){
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN
