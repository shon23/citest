const { totalPrice } = require('./price');

function formatOrder(name, prices) {
  return name + ' pays ' + totalPrice(prices);
}

module.exports = { formatOrder };

// ---- EXERCISE 2 ------------------------------------------------
// Remove the // at the start of each line below, then push.
//
function receipt(name, prices) {
  const total = totalPrice(prices);
  if (prices.length === 0) {
    return name + ' ordered nothing';
  }
  return name + ' pays ' + total;
}
module.exports.receipt = receipt;
