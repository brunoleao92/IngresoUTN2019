function Mostrar()
{


	var numero;
	var maximo;

	var minimo;
	var contador=0;	
	
	var respuesta
do
	{
		numero=parseInt(prompt("Ingrese un numero"));
	if(contador == 0){
		maximo=numero;
		minimo=numero;
	}
	if(numero>maximo)
	{maximo=numero;}
    
	if(numero<minimo) 
	{minimo=numero;}

	respuesta= prompt("Desea continuar?").toLocaleLowerCase();
		
	contador ++;
	}while(respuesta == "si");
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN