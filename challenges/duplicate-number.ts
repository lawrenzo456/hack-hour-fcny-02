/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */
//input = an array of n + 1 numbers with distinct numbers except 1,
//output - either 0 if no duplicates, or # if duplicate
//one loop to go through the array and another to check whether there's a copy of that number
export const duplicateNumber = (array: number[]): number => {
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[i] === array[j]) {
  //       return array[i];
  //     } else {
  //       console.log(array[i], ' arrayj: ', array[j]);
  //       continue;
  //     }
  //   }
  // }
  for (let i = 0; i < array.length; i++) {
    
  }
  const set1 = new Set(array);
  // const set2 = new Set(array);

  console.log(set1);
  return 0;
};

console.log(duplicateNumber([1, 5, 3, 3, 0, 4]));
/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */

export const duplicateNumberAdvanced = (array: number[]): number => {
  //o(n)

  //o(1)
  return 0;
};
