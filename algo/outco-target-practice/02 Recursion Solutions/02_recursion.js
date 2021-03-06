/* 
 *                        Target Practice II                          
 *                                                                    
 *                           Recursion                                
 *                                                                    
 *  Instructions: Using the Helper Method Recursive Pattern work through the 
 *  following problems.                              
 *                                                                    
 */
'use strict';
/*
 * 1a. What is the term when the recursive call invokes itself more than once.
 *
 * multiple recursion
 *
 */


/*
 * 1b. List the steps involved to build a Helper Method Recursion algorithm.
 *
 * 1) Instantiate variables to track state
 * 2) Return variables
 * 3) Instantiate the helper function and invoke it
 * 4) Create base case inside the helper function
 * 5) Create recursive cases
 */


/*
 * 1c. Should the recursive case or base case typically be tackled first?
 *
 * The base case
 */


/*
 * 2a. Print each item in an array in order using Helper Method Recursion
 *
 * Input:   Array
 * Output:  Undefined
 *
 * Example: printArray([1,2,3]) => 
 *          1
 *          2
 *          3
 */

function printArray(arr){
  function traverse(index){
    if (index === arr.length){
      return;
    }

    console.log(arr[index]);

    traverse(index+1);
  }
  traverse(0);
}

// printArray([1,2,3]);


/*
 * 2b. Print each item in an array backwards using Helper Method Recursion
 *
 * Input:   Array
 * Output:  Undefined
 *
 * Example: printReverse([1,2,3]) => 
 *          3
 *          2
 *          1
 */

function printReverse(arr){
  function traverse(index){
    if (index < 0){
      return;
    }

    console.log(arr[index]);

    traverse(index - 1);
  }
  traverse(arr.length - 1);
}

// printReverse([1,2,3]);


/*
 * 2c. Reverse a string using Helper Method Recursion
 *
 * Input:   String
 * Output:  String
 *
 * Example: reverseString('hello') => 'olleh'
 */

function reverseString(str){
  var result = '';
  function traverse(index){
    if (index < 0){
      return;
    }

    result += str[index];

    traverse(index - 1);
  }
  traverse(str.length - 1);

  return result;
}

// console.log(reverseString('hello'));


/*
 * 2d. Given an array of integers, create an array of two-item arrays using 
 *     Helper Method Recursion
 *
 * Input:   Array of Integers
 * Output:  Array of two-item Arrays
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */

function arrayPairs(arr){
  var result = [];

  function traverse(index){
    if (index >= arr.length){
      return;
    }

    result.push([arr[index], arr[index+1]]);
    traverse(index+2);
  }
  traverse(0);

  return result;
}

// console.log(arrayPairs([1,2,3,4,5,6]));
// console.log(arrayPairs([1,2,3,4,5]));


/*
 * 2e. Flatten a nested array using Helper Method of Recursion
 *
 * Input:   Array of Integers and Arrays
 * Output:  Array of Integers
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */

function flatten(arr){
  var work = [];

  function traverse(element){
    if (Number.isInteger(element)){
      work.push(element);
    }

    for (var i = 0; i < element.length; i++){
      traverse(element[i]);
    }
  }
  traverse(arr);

  return work;
}

// console.log(flatten([1, [2, 3, [4]], 5, [[6]]]));


/*
 * 2f. Given a base and an exponent, create a function to find the power using
 *     Helper Method Recursion
 *
 * Input:   Two Integers, base and exponent
 * Output:  Integer
 *
 * Example: power(3, 4) => 81
 */

// 1 --> 3 --> 9 --> 27 --> 81
function power(base, exponent){
  var work = 1;

  function multiply(counter){
    if (counter === exponent){
      return;
    } 

    work = work * base;

    multiply(counter + 1);
  }
  multiply(0);

  return work;
}

// console.log(power(3, 4));


/*
JAVA Solution

import java.io.*;
import java.util.*;


class Solution {
  
  private static int work = 1;
  private static int base = 3;
  private static int exponent = 7;
  
  public static void main(String[] args) {
    multiply(0);
    
    System.out.println(work);
  }
  
  private static void multiply(int counter){
    if (counter == exponent){
      return;
    }
    
    work = work * base;
    
    multiply(counter + 1);
  }
}

*/


/*
 * 2g. Merge two sorted arrays using the Helper Method Recursion
 * 
 * Input:   Two Arrays, both sorted
 * Output:  Array, sorted
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */

function merge(arr1, arr2){
  var work = [];

  function traverse(pointer1, pointer2){
    if (pointer1 === arr1.length){
      work = work.concat(arr2.slice(pointer2));
      return;
    } else if (pointer2 === arr2.length){
      work = work.concat(arr1.slice(pointer1));
      return;
    }

    if (arr1[pointer1] <= arr2[pointer2]){
      work.push(arr1[pointer1]);
      pointer1++;
    } else if (arr2[pointer2] < arr1[pointer1]){
      work.push(arr2[pointer2]);
      pointer2++;
    }
    traverse(pointer1, pointer2);

  }
  traverse(0, 0);

  return work;
}

// console.log(merge([1,4,7], [2,3,6,9]));














////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// code for capturing console.log output
var record = [];


console.log('printArray tests');
var testCount = [0, 0];

assert(testCount, 'able to print the elements of [1,2,3] forwards', function(){
  record = captureLog(printArray.bind(this, [1,2,3]));
  return record.length === 3 && record[0] === 1 && record[1] === 2 && record[2] === 3;
});

assert(testCount, 'does not print for an empty array', function(){
  record = captureLog(printArray.bind(this, []));
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', function(){
  record = captureLog(printArray.bind(this, [5]));
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printReverse tests');
var testCount = [0, 0];

assert(testCount, 'able to print the elements of [1,2,3] backwards', function(){
  record = captureLog(printReverse.bind(this, [1,2,3]));
  return record.length === 3 && record[0] === 3 && record[1] === 2 && record[2] === 1;
});

assert(testCount, 'does not print for an empty array', function(){
  record = captureLog(printReverse.bind(this, []));
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', function(){
  record = captureLog(printReverse.bind(this, [5]));
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('reverseString tests');
var testCount = [0, 0];

assert(testCount, 'able to reverse string \'hello\'', function(){
  var test = reverseString('hello');
  return test === 'olleh';
});

assert(testCount, 'able to return an empty string for empty string input', function(){
  var test = reverseString('');
  return test === '';
});

assert(testCount, 'able to return the same character for a single-character input string', function(){
  var test = reverseString('b');
  return test === 'b';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('arrayPairs tests');
var testCount = [0, 0];

assert(testCount, 'should return [[1,2],[3,4],[5,6]] output for [1,2,3,4,5,6] input', function(){
  var test = arrayPairs([1,2,3,4,5,6]);
  return test.length === 3 && 
    test[0][0] === 1 && test[0][1] === 2 && 
    test[1][0] === 3 && test[1][1] === 4 && 
    test[2][0] === 5 && test[2][1] === 6;
});

assert(testCount, 'should return [[1,2],[3,4],[5,undefined]] output for [1,2,3,4,5] input', function(){
  var test = arrayPairs([1,2,3,4,5]);
  return test.length === 3 && 
    test[0][0] === 1 && test[0][1] === 2 && 
    test[1][0] === 3 && test[1][1] === 4 && 
    test[2][0] === 5 && test[2][1] === undefined;
});

assert(testCount, 'should return [] output for [] input', function(){
  var test = arrayPairs([]);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('flatten tests');
var testCount = [0, 0];

assert(testCount, 'should return [1,2,3,4,5,6] output for [1, [2, 3, [4]], 5, [[6]]] input', function(){
  var test = flatten([1, [2, 3, [4]], 5, [[6]]]);
  return test.length === 6 && 
    test[0] === 1 && test[1] === 2 && 
    test[2] === 3 && test[3] === 4 && 
    test[4] === 5 && test[5] === 6;
});

assert(testCount, 'should return [] output for [] input', function(){
  var test = flatten([]);
  return test.length === 0;
});

assert(testCount, 'should return [1,2,3,4,5,6] output for [1, [2, 3, [4], []], [], 5, [[], [6]]] input (note the empty arrays)', function(){
  var test = flatten([1, [2, 3, [4], []], [], 5, [[], [6]]]);
  return test.length === 6 && 
    test[0] === 1 && test[1] === 2 && 
    test[2] === 3 && test[3] === 4 && 
    test[4] === 5 && test[5] === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('power tests');
var testCount = [0, 0];

assert(testCount, 'should return 81 for 3 to the 4th power', function(){
  var test = power(3, 4);
  return test === 81;
});

assert(testCount, 'should return 1 for 5 to the 0th power', function(){
  var test = power(5, 0);
  return test === 1;
});

assert(testCount, 'should return 1 for 1 to the 100th power', function(){
  var test = power(1, 100);
  return test === 1;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('merge tests');
var testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 6, 7, 9] when merging [1, 4, 7]' + 
  ' and [2, 3, 6, 9]', function(){
  var test = merge([1,4,7], [2,3,6,9]);
  return test.length === 7 &&
    test[0] === 1 &&
    test[1] === 2 &&
    test[2] === 3 &&
    test[3] === 4 &&
    test[4] === 6 &&
    test[5] === 7 &&
    test[6] === 9;
});

assert(testCount, 'should handle inputs when left argument is empty array', function(){
  var test = merge([], [2,3,6,9]);
  return test.length === 4 &&
    test[0] === 2 &&
    test[1] === 3 &&
    test[2] === 6 &&
    test[3] === 9;
});

assert(testCount, 'should handle inputs when right argument is empty array', function(){
  var test = merge([1,4,7], []);
  return test.length === 3 &&
    test[0] === 1 &&
    test[1] === 4 &&
    test[2] === 7;
});

assert(testCount, 'should handle two empty arrays as inputs', function(){
  var test = merge([], []);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');




// example below
// 
// directions: captureLog function returns an array of all elements that were 
//             printed using console.log with the function that it is given. 
//             Note that the function given to captureLog must be fed arguments
//             using function binding. Otherwise, pass it in with an anonymous
//             function. 

function captureLog(toRun){

  var record = [];
  (function () {
    var log = console.log;
    console.log = function () {
      record = record.concat(Array.prototype.slice.call(arguments));
      log.apply(this, Array.prototype.slice.call(arguments));
    };
  }());
  
  toRun.apply(this, arguments); 
  return record;
}


// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed 
function assert(count, name, test){
  if(!count || !Array.isArray(count) || count.length !== 2) { 
    count = [0, '*']; 
  } else {
    count[1]++;
  }
  
  var pass = 'false';
  var errMsg = null;
  try {
    if (test()) { 
      pass = ' true';
      count[0]++;
    } 
  } catch(e) {
    errMsg = e;
  } 
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}



