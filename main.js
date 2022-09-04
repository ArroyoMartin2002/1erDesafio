alert("Aqui podra calcular el monto a pagar en relacion a la cantidad de cuotas ofrecudas con sus respectivos intereses")

let monto = parseInt(prompt("Ingrese el monto a abonar: "));

let cuotas=parseInt(prompt("¿En cuantas cuotas quiere efectuar el pago? (3,6,12): "));

while(cuotas != "3" && cuotas !="6" && cuotas != "12" ) {
    cuotas = parseInt(prompt("ingrese un valor valido (3,6,12): "));
}

switch(cuotas){
    case 3:
        alert("Usted debera pagar 3 cuotas de " + ((monto * 1.13) / 3) +  " resultando en un monto total aproximado de " + monto * 1.13);;
        break;
    case 6:
        alert("Usted debera pagar 6 cuotas de " + ((monto * 1.21) / 6) +  " resultando en un monto total aproximado de " + monto * 1.21);;
        break;
    case 12:
        alert("Usted debera pagar 12 cuotas de " + ((monto * 1.36) / 12) +  " resultando en un monto total aproximado de " + monto * 1.36);;
        break;
    default:
        alert("?")
        break;
}


