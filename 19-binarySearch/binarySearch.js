class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
	var minimum = 0;
	var maximum = nums.length - 1;
	while (minimum <= maximum)
	{
		var average = Math.floor((minimum +maximum)/2);
		if (nums[average] == target)
			return true;
		else if (nums[average] < target)
		{
			minimum = average + 1;
			this.binarySearch(minimum, target);	
		}
		else if(nums[average] > target)
		{
			maximum = average - 1;
			this.binarySearch(maximum, target);
		}
  }
  return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;