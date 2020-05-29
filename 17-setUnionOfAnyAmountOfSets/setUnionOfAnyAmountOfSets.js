function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var unionSet = new Set();
  for (var arg of args)
  {
	  for (var num of arg)
	  {
		  unionSet.add(num);
	  }
  }
  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;