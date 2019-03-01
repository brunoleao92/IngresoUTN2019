function Mostrar()
{var contadordivisores= 0;
    var numero;
    numero=parseInt(prompt("Ingrese un numero"))
while(numero<=0 || isNaN(numero)){
    num=parseInt(prompt("Error. Reingrese un numero"));
}

for(var i= 1; i <numero ; i ++){if(numero% i ==0){
    console.log(i);
    contadordivisores++
}
}
console.log("cantidad de divisores "+contadordivisores);

}//FIN DE LA FUNCIÓN