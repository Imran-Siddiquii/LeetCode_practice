// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Solution -- >

const twoSum = (nums, target) => {
  let indexVal;
  for (let k = 0; k < nums.length; k++) {
    let j = k + 1;
    for (let i = j; i < nums.length; i++) {
      if (nums[k] + nums[i] == target) {
        indexVal = [k, i];
      }
    }
  }
  return indexVal;
};
console.log(twoSum([2, 7, 11, 15], 9));

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Solution -->

const palindrome = (num) => num.toString().split("").reverse().join("") == num;
console.log(palindrome(1001));

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer

// const romanToInt = (string) => {
//   let I = 1;
//   let V = 5;
//   let X = 10;
//   let L = 50;
//   let C = 100;
//   let D = 500;
//   let M = 1000;

//   let valueI = [];
//   let valueV;
//   let valueX;
//   let valueL;
//   let valueC;
//   let valueD;
//   let valueM;
//   let array = string.split("");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "I") {
//       console.log(i);
//       valueI.push({ I, i });
//     } else if (array[i] == "V") {
//       let valueIV;
//       if (array[i - 1] == "I") {
//         valueIV = 4;
//       }
//       valueV = [V, i, valueIV];
//     } else if (array[i] == "X") {
//       let valueIX = 9;
//       if (array[i - 1] == "I") {
//         valueIX = 9;
//       }
//       valueV = [V, i, valueIX];
//       valueX = [X, i];
//     } else if (array[i] == "L") {
//       let value49 = 9;
//       if (array[i - 1] == "X") {
//         value49 = 40;
//       }
//       valueL = [L, i.value49];
//     } else if (array[i] == "C") {
//       let value99 = 90;
//       if (array[i - 1] == "I") {
//         value99 = 40;
//       }
//       valueL = [L, i, value99];
//       valueC = [C, i];
//     } else if (array[i] == "D") {
//       valueD = [D, i];
//     } else {
//       valueM = [M, i];
//     }
//   }
//   return [valueI, valueV, valueX, valueL, valueC, valueD, valueM];
// };
// console.log(romanToInt("LXVII"));

const romanToInt = (str1) => {
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
};

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

console.log(romanToInt("MCMXCIV"));
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
