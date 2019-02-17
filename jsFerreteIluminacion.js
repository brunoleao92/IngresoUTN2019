/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cl;
 	var precio;
 	var pcd;
 	var psd;
     var marca;
    var imp;

 	cl=parseInt(document.getElementById("Cantidad").value);
 	precio=35;
 	marca=document.getElementById("Marca").value;
 	psd=precio*cl;
    
     if(cl<3){
    document.getElementById("precioDescuento").value = psd;}
    
     if(cl >=6){
 	 
      document.getElementById("precioDescuento").value =psd- (psd*0.5);
      

 	}
 	
 	else if(cl==5){
 	 if(marca=="ArgentinaLuz"){
 	  
 	  document.getElementById("precioDescuento").value =psd-(psd*0.40);
 	  }
 	  else
 	  {
   		document.getElementById("precioDescuento").value =psd-(psd*0.30);
   	}
 	  
}
else if(cl==4){
	if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
 	  
 	  document.getElementById("precioDescuento").value =psd-(psd*0.25);
 	  }
 	 else
 	  {
   		document.getElementById("precioDescuento").value =psd-(psd*0.20);
   	}
}
else if(cl==3){
	if(marca=="ArgentinaLuz"){
 	  
 	  document.getElementById("precioDescuento").value =psd-(psd*0.15);
 	  }
 	 else if(marca=="FelipeLamparas"){
   		document.getElementById("percioDescuento").value =psd-(psd*0.10)
   	}
 	  else
 	  {
   		document.getElementById("precioDescuento").value =psd-(psd*0.05);
   	}
}pcd=parseFloat(document.getElementById("precioDescuento").value); 
     imp= pcd*0.1;
if(cl>6)

{
    
alert("Usted pago "+imp.toFixed(2)+" de IIBB.");
    

}

}