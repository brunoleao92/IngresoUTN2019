function Mostrar()
{

	var contpos=0;
	var contneg=0;
	var numero=0;
	var acumpos=0;
	var acumneg=0;
	var ceros=0;
	var prompos;
    var promneg;
  var cantpares=0;
     var respuesta;
var diferencia;




	do{
    numero=parseInt(prompt("Ingrese un numero"));
	if(numero>0){
    acumpos+=numero;

    
	contpos++
	}
	else if(numero<0){
		acumneg+=numero;
		contneg++
	}
    else{
		ceros++;
	}
	if(numero % 2 == 0){
		cantpares++;
	}
	
respuesta=prompt("desea continuar?");
	}while(respuesta== "s");
prompos=acumpos/contpos;
promneg=acumneg/contneg;
diferencia=contneg-contpos;
document.write("Suma de los negativos "+acumneg + "<br>" );
document.write("Suma de los positivos "+ acumpos + "<br>");
document.write("Cantidad de positivos "+ contpos + "<br>");
document.write("Cantidad de negativos " + contneg + "<br>");
document.write("Cantidad de ceros. " + ceros + "<br>");
document.write("Cantidad de números pares. " + cantpares + "<br>");
document.write("Promedio de positivos. " + prompos + "<br>");
document.write("Promedio de negativos. " + promneg + "<br>" );
document.write("Diferencia entre positivos y negativos, (positvos-negativos). "+ diferencia + "<br>");}