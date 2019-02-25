function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var i;
	
do{
         i=parseInt(prompt("Ingrese un numero"));

	  acumulador +=i;
	  respuesta=prompt("Desea continuar? ");

	  contador++;
	}while(respuesta =="si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN