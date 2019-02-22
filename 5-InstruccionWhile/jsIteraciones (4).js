function Mostrar()
{

	var numero =parseInt(prompt("ingrese un número entre 0 y 10."));
	
while(!(numero>0 && numero<11))
{
	numero=prompt("el numero ingresado es incorrecto")
}
document.getElementById("Numero").value = ("su numero es "+ numero);
}//FIN DE LA FUNCIÓN