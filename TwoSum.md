## Leet Code 1 Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

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

Let’s solve the “Two Sum” problem using the Map object in JavaScript. Map provides a more flexible and efficient way to store key-value pairs compared to a regular object.

```
function twoSum(nums, target) {
    // Create a new Map to store the numbers and their indices
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in the Map
        if (numMap.has(complement)) {
            // Return the indices if found
            return [numMap.get(complement), i];
        }

        // Otherwise, store the current number and its index in the Map
        numMap.set(currentNum, i);
    }

    // If no solution is found (which shouldn't happen as per the problem), return an empty array
    return [];
}
```

Explanation

    1.	Initialization:
    •	We create a new Map called numMap to store the numbers we’ve encountered so far, with their corresponding indices.
    2.	Iterating through the Array:
    •	For each number in the nums array, we calculate its complement by subtracting the current number from the target (target - currentNum).
    •	We then check if this complement is already in the Map:
    •	If it is, we have found the pair of numbers that add up to the target, so we return their indices.
    •	If it isn’t, we store the current number and its index in the Map using the set method.
    3.	Returning the Result:
    •	The loop will always find a solution since the problem guarantees exactly one solution. When found, the indices are returned as an array.

```
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]
```

Key Points

    •	Map Usage: The Map object is particularly useful here because it efficiently handles keys of any type and allows for quick lookups using the has method and retrieval with get.
    •	Time Complexity: This solution has a time complexity of O(n), where n is the length of the nums array, because each element is processed only once.
    •	Space Complexity: The space complexity is also O(n) because the Map stores up to n elements.
