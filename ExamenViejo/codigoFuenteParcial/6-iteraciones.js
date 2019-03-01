//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
    var maximo;
    var minimo;
    var contador=0;
   

do{
    numero=parseInt(prompt("Ingrese un importe"));
    while(numero<0 || isNaN(numero)){
        numero=parseInt(prompt("Error. Reingrese un importe"));
    }
if(contador==0){

    maximo=numero;
    minimo=numero;
}
if (numero>maximo){maximo=numero;

}
else {
    minimo=numero;
}
contador++;
}while(contador<7)

alert("El mayor importe de venta fue de $" + maximo +" y el menor importe de venta fue de $" + minimo);

}