function Mostrar()
{

	var contador=0;
	var positivo =0;
	var negativo=1;
	var respuesta='si';
	var i;

do{
i=parseInt(prompt("ingrese un numero"));
if(i>=0)
{
	positivo+=i;
}
else{
	negativo*=i
}


respuesta=prompt("Desea continuar ?").toLocaleLowerCase();

}while(respuesta=="si")



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN