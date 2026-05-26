/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rationale:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rationale: No elements inside the array sum up to the target number
*/

export const twoSum = (arr: number[], target: number): boolean => {
  //first iteration of array, key is the number in the array, and the value is the difference

  return false;
};

const twoSumIndices = (arr: number[], target: number) => {
  // return array
  // const result = [];
  // sort arr
  const sorted = arr.toSorted((a, b) => a - b);
  // l at beg, r at end
  let lIdx = 0;
  let rIdx = sorted.length - 1;
  // while l < r
  while (lIdx < rIdx) {
    // find sum at l and r
    let sum = sorted[lIdx] + sorted[rIdx];
    // if = to target return [l,r]
    if (sum === target) {
      let lEl = sorted[lIdx];
      let rEl = sorted[rIdx];
      return [arr.indexOf(lEl), arr.indexOf(rEl)];
    }
    // if sum < target, l++
    if (sum < target) {
      lIdx++;
      continue;
    }
    // if sum > target, r--
    if (sum > target) {
      rIdx--;
      continue;
    }
  }
  return false;
};

console.log(twoSumIndices([3, 2, 4], 6));

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

export const threeSum = (arr: number[], target: number): boolean => {
  return false;
};

/*from Kevin
function twoSum(nums: number[], target: number): number[] {

// solution 
// lets get the difference of target minus nums (n)

// then use for loop on array 

// let difference = target - nums[i]
// for (let i =0; i< nums.lenght-1; i++ )

// target = 9 - 2 
// target = 7


// Then
// place the array into a hashmap
// key of hashmap will be index
// value of hashmap will be number 


// Then
// check if the hashmap has target
//map.get(target)
// map.get(7)
// 

// if yes then return the current index and key [i,map.key(7)]
                                                // return [0,1]

// 

    
};
*/
