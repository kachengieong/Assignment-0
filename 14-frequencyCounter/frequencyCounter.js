function frequencyCounter(word) {
  // Insert code here;
  var counter = {};
  for (var i = 0; i < word.length; i++)
  {
	  var character = word.charAt(i);
	  if(counter[character])
		  counter[character]++;
	  else
		  counter[character] = 1
  }
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;