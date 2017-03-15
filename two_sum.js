var nums = [3, 2, 4]

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      var result = nums[i]+nums[j] === target
      if ((i != j) && result) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum(nums, 5));
