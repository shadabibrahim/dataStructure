// Given an array arr[] of random integers, the task is to push all the zero’s in the array to the start and all the one’s to the end of the array. Note that the order of all the other elements should be the same.Example: Input: arr[] = {1, 2, 0, 4, 3, 0, 5, 0} Output: 0 0 0 2 4 3 5 1

// by using inbuilt method
```
function rearrangeArray(arr) {
// Arrays to hold zeros, ones, and other elements
let zeros = [];
let ones = [];
let others = [];

    // Loop through the array and separate the elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else if (arr[i] === 1) {
            ones.push(arr[i]);
        } else {
            others.push(arr[i]);
        }
    }

    // Concatenate the arrays: zeros + others + ones
    return zeros.concat(others, ones);

}
```

// Example usage
let arr = [1, 2, 0, 4, 3, 0, 5, 0];
let result = rearrangeArray(arr);
console.log(result); // Output: [0, 0, 0, 2, 4, 3, 5, 1]

// Explanation:

// • zeros: This array will collect all 0s.
// • ones: This array will collect all 1s.
// • others: This array will collect all other elements.
// • After separating the elements, we concatenate the arrays: zeros followed by others, and finally ones.

// This ensures that all 0s are at the start, all 1s are at the end, and the order of the other elements remains unchanged.
<-------------------------------------------------------------------------------------------------->
// You can achieve this without using push, concat, or other in-built array methods by manually rearranging the elements in place. Below is the JavaScript function to do this:

```
function rearrangeArray(arr) {
let n = arr.length;

    // Two pointers
    let countZero = 0;
    let countOne = n - 1;

    // Create a new array to hold the final result
    let result = new Array(n);

    // Traverse the array
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            result[countZero++] = 0;
        } else if (arr[i] === 1) {
            result[countOne--] = 1;
        }
    }

    // Fill in the remaining elements
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0 && arr[i] !== 1) {
            result[countZero++] = arr[i];
        }
    }

    // Copy the result back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = result[i];
    }

}
```
// Example usage
let arr = [1, 2, 0, 4, 3, 0, 5, 0];
rearrangeArray(arr);
console.log(arr); // Output: [0, 0, 0, 2, 4, 3, 5, 1]

Explanation:

    1.	Two pointers:
    •	countZero: Tracks where the next 0 should be placed (starting from the beginning).
    •	countOne: Tracks where the next 1 should be placed (starting from the end).
    2.	First pass:
    •	We iterate through the array and place all 0s at the beginning using countZero.
    •	We place all 1s at the end using countOne.
    3.	Second pass:
    •	We iterate again to fill in the remaining elements (which are neither 0 nor 1) in the positions left between 0s and 1s.
    4.	Final step:
    •	Copy the sorted result back to the original array.

This solution avoids using in-built functions and rearranges the elements in place with a time complexity of O(n).
