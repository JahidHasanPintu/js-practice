
function pandaCost(singara,somucha,jilapi){
    singaraPrice=singara*7;
    somuchaPrice=somucha*10;
    jilapiPrice=jilapi*15;
    totalPrice=singaraPrice+somuchaPrice+jilapiPrice;
    return totalPrice;
}

pandaTest= pandaCost(5,10,15);
console.log(pandaTest);