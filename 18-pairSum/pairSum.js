function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1)
	  throw "error";
  else
  {
	  var isPair = false;
	  for (var i = 0; i < nums.length; i++)
	  {
		  for (var j = 1; j < nums.length -1; j++)
		  {
			  if(nums[i]+nums[j] == target)
				  isPair = true;
		  }
	  }
  }
  return isPair;
}

// Do not edit this line;
module.exports = pairSum;