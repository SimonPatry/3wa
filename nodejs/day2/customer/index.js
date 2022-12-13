const u = require('./utils');

const products = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

const setPrices = (prods) => {
    prods.forEach(elem => {
        elem.priceTTC = u.TTC(elem.priceHT).toFixed(2);
    });
}

setPrices(products);
console.log(products);