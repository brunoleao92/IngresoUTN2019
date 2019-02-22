function Mostrar()
{

	var contador=0;
	var acumulador;
	var i;
acumulador=parseFloat(prompt("ingrese el numero"));
while(contador<4){
contador=contador+1;

i=parseFloat(prompt("ingrese el numero"));
acumulador= acumulador+i;



}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN