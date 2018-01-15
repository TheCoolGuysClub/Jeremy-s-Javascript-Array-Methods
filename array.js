
let nums = [3,5,1,75,77,98,126, 100, 104];
// 1. Write a function called numSorter that takes an array of integers as an argument.
//Return an array of integers where every integer has been squared.
const numSorter = (nums) => {
	let result = nums.map(num => Math.pow(num, 2));
	return result;
}


// 2. Write a function called findNum that takes an array of numbers and returns one number.
//This number is the first occurance of a number that is divisible by both seven and nine.
//If no number is found, then return null.

const findNum = (nums) => {
	for (i=0; i < nums.length; i++) {
		if ((nums[i] % 7 ===0) && (nums[i] % 9 ===0)) {
			return nums[i];
		}
	}
	return null;
}
// 3. Write a function called keepLarge that takes an array of integers and returns an
//array of only the integers that are greater or equal to 100.
const keepLarge = (nums) => {
	return nums.filter(num => num >= 100);
}

// 4. Write a function called removeNum that takes an array of numbers and an integer.
//The function removes the number from the array and returns the resulting array.
const removeNum = (nums, num) => {
	let result = nums;
	for (i=0; i < result.length; i++) {
		if (result[i] === num) {
			result.splice(i,1);
		}
	}
	return result;
}

//driver code
let sort = numSorter(nums);
console.log(sort);

let find = findNum(nums);
console.log(find);

let large = keepLarge(nums);
console.log(large);

let remove = removeNum(nums, 5);
console.log(remove);
