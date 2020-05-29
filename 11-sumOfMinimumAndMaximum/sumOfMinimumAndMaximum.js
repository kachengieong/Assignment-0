function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var minimum = nums[0];
  var maximum = nums[0];
  for(var i = 0; i < nums.length; i++)
  {
	  if(nums[i] > nums[i+1])
		  minimum = nums[i];
	  else if(nums[i] < nums[i+1])
		  maximum = nums[i+1];
  }
  return minimum + maximum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;