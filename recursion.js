/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i == nums.length) return 1;
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (i == words.length) return 0;
  return Math.max(words[i].length, longest(words, i+1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i>=str.length) return "";
  return str[i] + everyOther(str, i+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i*2 >= str.length) return true;
  return str[i] == str[str.length - (i+1)] && isPalindrome(str, i+1)
  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i == arr.length) return -1;
  if (arr[i] == val) {
    return i;
  } else {
    return findIndex(arr, val, i+1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length - 1) {
  if (i < 0) return "";
  return str[i] + revString(str, i-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i=0) {
  function getVals(obj, j=0) {
    let vals = Object.values(obj).flat();
    if (j == vals.length) return [];
    if (typeof vals[j] == 'object') {
      return [...getVals(vals[j]), ...getVals(obj, j+1)].flat()
    } else {
      return [vals[j], ...getVals(obj, j+1)].flat()
    }
  }
  let values = getVals(obj).flat();
  
  if (i == values.length) return [];
  if (typeof values[i] == 'string') {
    return [values[i], ...gatherStrings(obj, i+1).flat()]
  } else {
    return [gatherStrings(obj, i+1).flat()]
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length - 1) {
  let mid = Math.floor((low + high)/2);
  if (arr[mid] == val) {
    return mid
  } else if (arr[low] == val) {
    return low;
  } else if (arr[high] == val) {
    return high;
  } else if (arr[low] > val || arr[high] < val) {
    return -1;
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, low=0, high=mid)
  } else {
    return binarySearch(arr, val, low=mid, high=high)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
