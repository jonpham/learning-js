/********************************************************************* 
 *                        Target Practice I                          *
 *                                                                   *
 *               Complexity Analysis - Time & Space                  *
 *                                                                   *
 *  Instructions: List the Time and Space complexity of each         *
 *                of the following functions in the space provided   *
 *                                                                   *
 *********************************************************************/
'use strict';

/**
 * Problem 1:
 *
 *  Time Complexity: O(1)
 *  Auxiliary Space Complexity: O(1)
 **/

function isThereCat(obj) {

  while(obj['cat']) {
    console.log('There is cat!');
    delete obj['cat'];
  }
  console.log('There is no cat!');
}


/**
 * Problem 2:
 *
 *  Time Complexity: O(1)
 *  Auxiliary Space Complexity: O(1)
 **/

function powerOfThrees(int) {
  var result = [];
  var count = 1;
  var temp = 1;

  while(count <= 3) {
    temp *= int;
    result.push(temp);
    count++;
  }

  return result;
}

// console.log(powerOfThrees(5));

/**
 * Problem 3:
 *
 *  Time Complexity: O(n^2)
 *  Auxiliary Space Complexity: O(1)
 **/

function findDuplicate(collection) {
  var len = collection.length;
  var currItem;

  for (var i = 0; i < len; i++) {
    currItem = collection[i];

    for (var j = 0; j < len; j++) {
      if (j !== i) {
        if (currItem === collection[j]) {
          return true;
        }
      }
    }
  }
  return false;
}


/**
 * Problem 4:
 *
 *  Time Complexity: O(n * m)
 *  Auxiliary Space Complexity: O(n * m)
 **/

function intersectionPoints(arr1, arr2) {
  var result = [];
  var points;

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        points = [arr1[i], arr2[j]];
        result.push(points);
        points = [];
      }
    }
  }

  return result;
}


/**
 * Problem 5:
 *
 *  Time Complexity: O(N)
 *  Auxiliary Space Complexity: O(N)
 **/

function nthFibonacci(n) {
  var result = [0,1];

  for(var i = 1; i < n; i++) {
    result[i+1] = result[i] + result[i-1];
  }

  return result[n];
}


/************************
 *     Extra Credit     *
 ************************/

/**
 * Extra Credit 1:
 *
 * Problem: Refactor findDuplicate such that it now finds 
 *          and returns all repeating elements
 *          in O(n) time complexity.
 *
 *          What is the auxiliary space complexity of your solution?
 *
 *          Auxiliary Space Complexity: O(1) The reason for this constant 
 *          auxiliary space complexity is that the worse-case scenario, with an
 *          infinitely large collection with all possible elements, will have
 *          at most a set number of unique elements. For example, if the 
 *          collection had only lowercase letters, at most, the lib and results
 *          hashes would only have 26 elements. 
 * 
 *          
 **/

function findDuplicate(collection) {
  var len = collection.length;
  var lib = {};
  var results = {};

  for (var i = 0; i < len; i++) {
    if (lib[collection[i]] === undefined){
      lib[collection[i]] = true;
    } else {
      results[collection[i]] = true;
    }
  }
  
  return Object.keys(results);
}

// console.log(findDuplicate([1,2,3,4,5,6,7,1,2,3]));


/**
 * Extra Credit 2:
 *
 *  Time Complexity: O(N)
 *  Auxiliary Space Complexity: O(N)
 **/

function nthFibonacci(n){
  var result;
  var cache = {};

  function searchFib(index){
    if (cache[index] !== undefined){
      return cache[index];
    } else if(index < 2){
      return index;
    } else {
      var toInsert = searchFib(index-2) + searchFib(index-1);
      cache[index] = toInsert;
      return cache[index];
    }
  }

  result = searchFib(n);
  return result;
}

// console.log(nthFibonacci(100));

