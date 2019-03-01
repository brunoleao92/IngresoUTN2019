//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
    var ancho;
    var perimetro;
    var perimetroTotal;
    largo=parseFloat(document.getElementById("largo").value);
    ancho=parseFloat(document.getElementById("ancho").value);

	perimetro=largo*2 + ancho*2;
    perimetroTotal=perimetro*6;
    alert("La cantidad de metros de alambre que se van a necesitar son " + perimetroTotal);
}

