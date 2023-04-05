// ----==== JS School - Lecture 4 HW ====----

/**
 * Ð¡riteria for assessment
 *
 * 5 - All tasks are correctly solved (23 items), the code is clean, the solutions are optimal;
 * 4 - Correctly solved all the tasks of the base block (15 tasks), the code is clean;
 * 3 - At least 10 problems are correctly solved, the code is clean;
 * 2 - Correctly solved at least 10 problems;
 * 1 - At least 5 problems solved correctly.
 */

/**
 * Warning
 *
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====----
/**
 * Exercise 1
 *
 * Write a function that returns odd array values.
 * [1,2,3,4] => [1,3]
 */
const getOddValues = (numbers) => {
  const oddNums = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNums.push(numbers[i]);
    }
  }
  return oddNums;
};
// console.log(getOddValues([1,2,3,4]))

/**
 * Exercise 2
 *
 * Write a function that returns the smallest value of an array
 * [4,2,10,27] => 2
 */
const getSmallestValue = (numbers) => {
  let smallNum = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallNum) {
      smallNum = numbers[i];
    }
  }
  return smallNum;
};

/**
 * Exercise 3
 *
 * Write a function that returns the biggest value of an array
 * [5,22,9,43] => 43
 */
const getBiggestValue = (numbers) => {
  let bigNum = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > bigNum) {
      bigNum = numbers[i];
    }
  }
  return bigNum;
};

/**
 * Exercise 4
 *
 * Write a function that takes an array of strings as input
 * and returns only those shorter than 20 characters
 *
 *[
 * 'I am a short string',
 * 'I seem to be short too',
 * 'And I am a long string'
 *] => [
 * 'I am a short string',
 *]
 *
 * Use: filter
 */
const getShorterStrings = (strings, characters = 20) => {
  return strings.filter((string) => string.length < characters);
};

// console.log(
//   getShorterStrings([
//     "I am a short string",
//     "I seem to be short too",
//     "And I am a long string",
//   ])
// );
/**
 * Exercise 5
 *
 * Write a function that takes the following data as input:
 *
 *[
 * { name: 'shark', likes: 'ocean' },
 * { name: 'turtle', likes: 'pond' },
 * { name: 'otter', likes: 'fish biscuits' }
 *]
 *
 * And returns an array of strings:
 *
 * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
 *
 * Use: map
 */

const getComputedStrings = (fish) => {
  return fish.map((f) => `${f.name} likes ${f.likes}`);
};
// console.log(
//   getComputedStrings([
//     { name: "shark", likes: "ocean" },
//     { name: "turtle", likes: "pond" },
//     { name: "otter", likes: "fish biscuits" },
//   ])
// );

/**
 * Exercise 6
 *
 * Write a function that takes 2 objects as input and returns 1 with
 * common properties. If properties have the same keys use the latter.
 *
 * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
 *
 * We use: ...
 */
const mergeObjects = (objects) => {
  return { ...objects[0], ...objects[1] };
};

// console.log(mergeObjects([{ name: "Alice" }, { age: 11 }]));
/**
 * Exercise 7
 *
 * Write a function that returns the smallest value of an array
 * [5,200,-5,41] => -5
 *
 * Use: operator ... and Math.min
 */
const getSmallestValue2 = (numbers) => {
  return Math.min(...numbers);
};

// console.log(getSmallestValue2([5, 200, -5, 41]));
/**
 * Exercise 8
 *
 * Write a function that returns odd array values.
 * [77,2,30,51] => [77,51]
 *
 * Use: reduce
 */
const getOddValues2 = (numbers) => {
  return numbers.reduce((oddNums, num) => {
    if (num % 2 === 1) {
      oddNums.push(num);
    }
    return oddNums;
  }, []);
};

// console.log(getOddValues2([77, 2, 30, 51]));
/**
 * Exercise 9
 *
 * Write a function that accepts data from the basket as input in the following form:
 *
 *[
 * {price: 10, count: 2},
 * {price: 100, count: 1},
 * {price: 2, count: 5},
 * {price: 15, count: 6},
 *]
 * where price is the price of the item and count is the quantity.
 *
 * The function should return the total price for this order.
 *
 * Use: reduce
 */
const calculateTotal = (products) => {
  return products.reduce((sum, product) => {
    sum += product.price * product.count;
    return sum;
  }, 0);
};

// console.log(
//   calculateTotal([
//     { price: 10, count: 2 },
//     { price: 100, count: 1 },
//     { price: 2, count: 5 },
//     { price: 15, count: 6 },
//   ])
// );
/**
 * Exercise 10
 *
 * Implement a function that has an array of numbers as input and an array of unique values as output
 * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
 *
 * Use: reduce and indexOf
 */
const getUniqueValues = (numbers) => {
  return numbers.reduce((uniqueNums, num) => {
    if (uniqueNums.indexOf(num) === -1) {
      uniqueNums.push(num);
    }
    return uniqueNums;
  }, []);
};

// console.log(getUniqueValues([1, 2, 2, 4, 5, 5]));
/**
 * Exercise 11
 *
 * Implement a function whose input is a numeric code of an error, the output is a string with a message
 * 500 => Server Error
 * 401 => Authorization failed
 * 402 => Server Error
 * 403 => Access denied
 * 404 => Not found
 *
 * Use: switch case or object like a map structure
 */
const getErrorMessage = (code) => {
  const errorMessageMap = new Map([
    [500, "Server Error"],
    [401, "Authorization failed"],
    [402, "Server Error"],
    [403, "Access denied"],
    [404, "Not found"],
  ]);

  return errorMessageMap.get(code);
};

// console.log(getErrorMessage(401));
/**
 * Exercise 12
 *
 * Write a function that returns the 2 smallest values of an array
 * [4,3,2,1] => [1,2]
 *
 * Use: .sort()
 */
const get2SmallestValues = (numbers) => {
  if (numbers.length < 2) return numbers;
  numbers.sort();
  let smallest2Nums = [];
  smallest2Nums.push(numbers[0], numbers[1]);
  return smallest2Nums;
};

// console.log(get2SmallestValues([4, 3, 2, 1]));
/**
 * Exercise 13
 *
 * Implement a function, at the input of which an object of the following form:
 * {
 * firstName: 'Peter',
 * secondName: 'Vasiliev',
 * patronymic: 'Ivanovich'
 *}
 * output line with the message 'Name: Petr Ivanovich Vasiliev'
 */
const getFullName = (user) => {
  return `Name: ${user.firstName} ${user.patronymic} ${user.lastName}`;
};

// console.log(
//   getFullName({
//     firstName: "Peter",
//     secondName: "Vasiliev",
//     patronymic: "Ivanovich",
//   })
// );
/**
 * Exercise 14
 *
 * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
 * a returns an array of the original array, each element of which has been multiplied by a factor:
 *
 * [1,2,3,4], 5 => [5,10,15,20]
 *
 * Use: map
 */
const multiplyTo = (numbers, multiplier) => {
  return numbers.map((num) => num * multiplier);
};

// console.log(multiplyTo([1, 2, 3, 4], 5));
/**
 * Exercise 15
 *
 * Implement a function that takes 2 arguments as input: an array and a franchise,
 * and returns a string with the names of the heroes separated by a comma:
 *
 *[
 * {name: "Batman", franchise: "DC"},
 * {name: "Ironman", franchise: "Marvel"},
 * {name: "Thor", franchise: "Marvel"},
 * {name: "Superman", franchise: "DC"}
 *],
 * Marvel
 * => Ironman, Thor
 *
 * Use: filter, map, join
 */
const getCharacterNames = (characters, franchise) => {
  return characters
    .filter((charInfo) => charInfo.franchise === franchise)
    .map((charInfo) => charInfo.name)
    .join();
};

// console.log(
//   getCharacterNames(
//     [
//       { name: "Batman", franchise: "DC" },
//       { name: "Ironman", franchise: "Marvel" },
//       { name: "Thor", franchise: "Marvel" },
//       { name: "Superman", franchise: "DC" },
//     ],
//     "Marvel"
//   )
// );

// ----==== Advanced exercises (8 items) ====----
/**
 * Exercise 16
 *
 * Write a function that returns an array of the smallest row values of a two-dimensional array
 *[
 * [10,1,300,4],
 * [20,2,300,400],
 * [30,3,300,4],
 * [40,4,300,4],
 *]
 * => [1,2,3,4]
 */
const getSmallestRow = (numbers) => {
  return numbers.map((row) => getSmallestValue(row));
};

// console.log(
//   getSmallestRow([
//     [10, 1, 300, 4],
//     [20, 2, 300, 400],
//     [30, 3, 300, 4],
//     [40, 4, 300, 4],
//   ])
// );
/**
 * Exercise 17
 *
 * Write a function that returns an array of the smallest column values of a two-dimensional array
 *[
 * [1,2,3,4],
 * [1,2,3,4],
 * [1,2,30,4],
 * [1,2,3,40],
 *]
 * => [1,2,3,4]
 */
const getSmallestColumn = (numbers) => {
  let rotatedNumbers = [];
  for (let i = 0; i < numbers[0].length; i++) {
    rotatedNumbers[i] = [];
    for (let j = 0; j < numbers.length; j++) {
      rotatedNumbers[i][j] = numbers[j][i];
    }
  }

  return getSmallestRow(rotatedNumbers);
};

// console.log(
//   getSmallestColumn([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 30, 4],
//     [1, 2, 3, 40],
//   ])
// );
/**
 * Exercise 18
 *
 * Write a function that returns the 2 biggest value of an array
 * [4,3,2,1] => [4,3]
 */
const get2BiggestValues = (numbers) => {
  if (numbers.length < 2) return numbers;
  numbers.sort();
  let biggest2Nums = [];
  biggest2Nums.push(numbers[numbers.length - 1], numbers[numbers.length - 2]);
  return biggest2Nums;
};

// console.log(get2BiggestValues([4, 3, 2, 1]));
/**
 * Exercise 19
 *
 * Write a function that returns the number of vowels in a string in English
 * ( a, e, i, o, u ).
 *
 * 'Return the number (count) of vowels in the given string.' => 15
 */
const getNumberOfVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      counter++;
    }
  }
  return counter;
};

// console.log(
//   getNumberOfVowels("Return the number (count) of vowels in the given string.")
// );
/**
 * Exercise 20
 *
 * Write a function that returns an array of two strings where the first element
 * is the original string with uppercase even letters, and the second
 * with capital odd.
 * 'abcdef' => ['AbCdEf', 'aBcDeF']
 */
const getCapitalizedStrings = (string) => {
  let oddString = "";
  let evenString = "";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      evenString = evenString.concat(string[i].toUpperCase());
      oddString = oddString.concat(string[i]);
    } else {
      evenString = evenString.concat(string[i]);
      oddString = oddString.concat(string[i].toUpperCase());
    }
  }
  return [evenString, oddString];
};

// console.log(getCapitalizedStrings("abcdef"));
/**
 * Exercise 21
 *
 * Write a function that satisfies the following conditions:
 *
 * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
 * the function returns a string that does not contain three identical letters in a row
 * the function removes the minimum number of letters from the string S
 *
 * Examples:
 * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
 * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
 * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
 *
 * Assumptions:
 * N is an integer in the range [1..200,000]
 * S consists only of lowercase letters [a-z]
 */
const getCorrectString = (string) => {
  let currentCounter = 1;
  let finalString = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      if (currentCounter < 2) {
        currentCounter++;
        finalString = finalString.concat(string[i]);
      }
    } else {
      currentCounter = 1;
      finalString = finalString.concat(string[i]);
    }
  }
  return finalString;
};

// console.log(getCorrectString("uuuuxaaaaxuuu"));
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getFlattenedArray = (numbers) => {};
/**
 * Exercise 23
 *
 * Implement a function that has an array of numbers as input and an array of not unique values as output.
 *
 * [1, 2, 2, 4, 5, 5] => [2, 5]
 */
const getNotUniqueValues = (numbers) => {
  let numCounter = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (numCounter.has(numbers[i])) {
      numCounter.set(numbers[i], numCounter.get(numbers[i]) + 1);
    } else {
      numCounter.set(numbers[i], 1);
    }
  }
  let finalArray = [];
  numCounter.forEach((count, num) => {
    if (count > 1) {
      finalArray.push(num);
    }
  });
  return finalArray;
};

// console.log(getNotUniqueValues([1, 2, 2, 4, 5, 5]));
