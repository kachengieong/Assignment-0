function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var product = 1;
  for (var arg of args)
	  product *= arg;
  return product; 
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;