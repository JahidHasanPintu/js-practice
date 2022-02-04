
function pandaCost(singara,somucha,jilapi){
    let singaraPrice=singara*7;
    let somuchaPrice=somucha*10;
    let jilapiPrice=jilapi*15;
    let totalPrice=singaraPrice+somuchaPrice+jilapiPrice;
    return totalPrice;
}

const pandaTest= pandaCost(5,10,15);
console.log(pandaTest);