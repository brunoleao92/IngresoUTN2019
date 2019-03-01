function Mostrar()
{var num;
var contadorPares=0;    
num=parseInt(prompt("ingrese un numero"));
while(num<=0 || isNaN(num)){
    num=parseInt(prompt("Error. Reingrese un numero"));
}
for(var i=1; i< num; i++)
{
     
if(num % 2 ==0 ){contadorPares++;
console.log(i);
}
console.log("Cantidad de pares "+ contadorPares);

}




}//FIN DE LA FUNCIÓN