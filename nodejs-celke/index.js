var discountFunc = require('./modules/calDiscount');

console.log('Programador');

var client = "Regis Patrick";

console.log('Cliente: ' + client);
console.log(`Cliente: ${client}`);

var valProduct = 100;
var valDiscount = 37;

var finalValue = discountFunc(valProduct, valDiscount);

console.log('Valor final do produto R$ ' + finalValue);