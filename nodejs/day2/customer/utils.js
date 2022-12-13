exports.TTC = function(priceHT, tva = 0.2) {
    return parseFloat(priceHT * (1 + tva));
}
