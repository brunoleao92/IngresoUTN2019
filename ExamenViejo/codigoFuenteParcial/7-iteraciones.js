//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var notas;
    var sexo;
    var promedionotas;
    var notaMasBaja;
    var contador=0;
    var acumuladornotas=0;
    var varonesAprobados;
    var flag=0
    do{
    notas=parseInt(prompt("Ingrese la nota"))
    while(notas<0 || notas>10 || isNaN(notas)){
    notas=parseInt(prompt("Error. Reingrese la nota"))
    }
    sexo=prompt("Ingrese su sexo").toLocaleLowerCase;
    while(sexo=="m" || sexo=="f"){
        sexo=prompt("Error. Reingrese su sexo").toLocaleLowerCase;
    flag=1}
       

    if(contador ==0){ notaMasBaja=nota }
    if (nota>notaMasBaja){notaMasBaja=nota}
   if(notas>0 && notas<=10) {acumuladornotas+=notas;}
if(notas>5 && sexo=="m"){varonesAprobados++;}

contador++;
    }while(contador<6);
promedionotas=acumuladornotas/6;

alert("a)el promedio de las notas fue :" + promedionotas);
alert("La nota mas baja fue " + notaMasBaja);
alert("la cantidad de varones aprobados es "+ varonesAprobados);

}
