/*
 *                           Target Practice V                        
 *                                                                    
 *                         Sorting II - Revisted                      
 *                                                                    
 *  Instructions: To further reinforce understanding of how Mergesort and 
 *                Quicksort are implemented, we will be building those functions 
 *                again.                              
 *                                                                    
 *                Additionally, we will be using a minheap to build Heapsort. 
 *                Please use your minheap from class.     
 *                                                                    
 *                Please do not refer to your homework solutions for Mergesort 
 *                or Quicksort.                            
 *
 * 
 */

'use strict'

/*
 *  1. Please indicate whether the following sorting algorithms are stable or 
 *     unstable
 *
 *  Mergesort:
 *
 *  Quicksort:
 *
 *  Heapsort:
 */


/*
 *  2a. Implement Quicksort in your chosen language, such that given an unsorted 
 *      array of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: quicksort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */


/*
 *  2b. What is the time complexity and auxiliary space complexity of your quicksort?
 *
 *      Time Complexity:
 *      Auxiliary Space Complexity:
 */


/*
 *  3a. Implement Mergesort in your chosen language, such that given an 
 *      unsorted arrayof numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: mergesort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */


/*
 *  3b. What is the time complexity and auxiliary space complexity of your 
 *      mergesort?
 *
 *      Time Complexity:
 *      Auxiliary Space Complexity:
 */


/*
 *  4a. Implement heapsort in your chosen language, such that given an unsorted 
 *      array of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: heapsort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */


/*
 *  4b. What is the time complexity and auxiliary space complexity of your 
 *      heapsort?
 *
 *      Time Complexity:
 *      Auxiliary Space Complexity:
 */


/*
 *  If you do not have your own heap, please check the Target Practice resources 
 *  folder for a Binary Heap in your language
 */

























////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// code for capturing console.log output
var record = [];
(function () {
  var log = console.log;
  console.log = function () {
    record = record.concat(Array.prototype.slice.call(arguments));
    log.apply(this, Array.prototype.slice.call(arguments));
  };
}());


console.log('quicksort tests');
var testCount = [0, 0];

assert(testCount, 'able to sort a single-element array', function(){
  var results = quicksort([5])
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', function(){
  var results = quicksort([4,15,16,50,8,23,42,108])
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', function(){
  var results = [];
  for (var i = 0; i < 1000000; i++){
    results.push(Math.floor(Math.random() * 1000000));
  }
  var example = quicksort(results);
  results = results.sort(function(a, b){return a - b;});
  return arraysEqual(example, results);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('mergesort tests');
var testCount = [0, 0];

assert(testCount, 'able to sort a single-element array', function(){
  var results = mergesort([5])
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', function(){
  var results = mergesort([4,15,16,50,8,23,42,108])
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', function(){
  var results = [];
  for (var i = 0; i < 1000000; i++){
    results.push(Math.floor(Math.random() * 1000000));
  }
  var example = mergesort(results);
  results = results.sort(function(a, b){return a - b;});
  return arraysEqual(example, results);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('heapsort tests');
var testCount = [0, 0];

assert(testCount, 'able to sort a single-element array', function(){
  var results = heapsort([5])
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', function(){
  var results = heapsort([4,15,16,50,8,23,42,108]);
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', function(){
  var results = [];
  for (var i = 0; i < 1000000; i++){
    results.push(Math.floor(Math.random() * 1000000));
  }
  var example = heapsort(results);
  results = results.sort(function(a, b){return a - b;});
  return arraysEqual(example, results);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');









// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
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



