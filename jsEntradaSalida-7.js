/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var n1
    var n2
    var suma
n1 = document.getElementById("numeroUno").value;
n2 = document.getElementById("numeroDos").value;
n1 = parseInt(n1);
n2 = parseInt(n2);
suma = n1 + n2;

alert("La suma es " + suma);
}

function restar()
{var n1
    var n2
    var suma
n1 = document.getElementById("numeroUno").value;
n2 = document.getElementById("numeroDos").value;
n1 = parseInt(n1);
n2 = parseInt(n2);
resta = n1 - n2;
alert("La resta es " + resta);
	
}

function multiplicar()
{ 
	var n1
    var n2
    var multiplicacion
n1 = document.getElementById("numeroUno").value;
n2 = document.getElementById("numeroDos").value;
n1 = parseInt(n1);
n2 = parseInt(n2);
multiplicacion = n1 * n2;
alert("La multiplicación es "+ multiplicacion);
}

function dividir()
{
	var n1
    var n2
    var division
n1 = document.getElementById("numeroUno").value;
n2 = document.getElementById("numeroDos").value;
n1 = parseInt(n1);
n2 = parseInt(n2);
division = n1 / n2;
alert("La división es " + division);
}

