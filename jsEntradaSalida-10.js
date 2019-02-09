/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{ var x;
    var y;
    var z;
    x = document.getElementById("importe").value;
    y = x * 0.25;
    z = x - y;
document.getElementById("resultado").value = z;





}