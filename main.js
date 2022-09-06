alert("Aqui podra calcular el monto a pagar en relacion a la cantidad de cuotas ofrecidas con sus respectivos intereses")

let monto = parseInt(prompt("Ingrese el monto a abonar: "));

let cuotas=parseInt(prompt("¿En cuantas cuotas quiere efectuar el pago? (3,6,12): "));

while(cuotas != "3" && cuotas !="6" && cuotas != "12" ) {
    cuotas = parseInt(prompt("ingrese un valor valido (3,6,12): "));
}

let calculoCuotas = (monto,interes,cuotas) => {
    return (monto * interes) / cuotas;
}

switch(cuotas){
    case 3:
        alert("Usted debera pagar 3 cuotas de " + calculoCuotas(monto,1.13,cuotas) +  " resultando en un monto total aproximado de " + monto * 1.13);
        break;
    case 6:
        alert("Usted debera pagar 6 cuotas de " + calculoCuotas(monto,1.21,cuotas) +  " resultando en un monto total aproximado de " + monto * 1.21);
        break;
    case 12:
        alert("Usted debera pagar 12 cuotas de " + calculoCuotas(monto,1.36,cuotas) +  " resultando en un monto total aproximado de " + monto * 1.36);
        break;
    default:
        alert("?")
        break;
}



