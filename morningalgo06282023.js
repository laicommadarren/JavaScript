/* 
    Array: Second-Largest

    Return the second-largest element of an array, or null if there is none.

    Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

// JSDOCS
/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */

function secondLargest(nums = []) {
  let largest = nums[0];
  let secondL = 0;
  if (nums.length < 2) {
    return null;
  } 
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > secondL && nums[j] < largest) {
      secondL = nums[j];
    }
  }
  if (secondL == 0) {
      return null;
  }
  return secondL;
}

console.log(secondLargest(nums1));

console.log(secondLargest(nums2));
console.log(secondLargest(nums3));
console.log(secondLargest(nums4));
console.log(secondLargest(nums5));
console.log(secondLargest(nums6));
console.log(secondLargest(nums7));
console.log(secondLargest(nums8));