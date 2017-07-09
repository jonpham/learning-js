/*
 *                       Target Practice IV                               
 *                                                                   
 *                        Traversals Pt. 1                           
 *                                                                   
 *  Instructions: One of the most fundamental components of working with trees 
 *                and graphs is traversals.  We will focus primarily on this 
 *                piece to build your foundation of these data structures.               
 *                                                                   
 */
'use strict';

/*
 * First we need a binary search tree.  Use an existing binary search tree class 
 * that you have built. 
 */

var Node = function(value){
  this.value = value;
  this.rightChild = null;
  this.leftChild = null;
};

var BinarySearchTree = function(){
  this.root = null;
  this.size = 0;
};

BinarySearchTree.prototype.insert = function(value){
  if (this.root === null){
    // when the tree is empty
    this.root = new Node(value);
    this.size++;
  } else {
    // when stuff has already been inserted
    function findAndInsert(currentNode){

      if (value > currentNode.value){
        if (currentNode.rightChild === null){
          currentNode.rightChild = new Node(value);
        } else {
          findAndInsert(currentNode.rightChild);
        }
      } else if (value < currentNode.value){
        if (currentNode.leftChild === null){
          currentNode.leftChild = new Node(value);
        } else {
          findAndInsert(currentNode.leftChild);
        }
      }
    };

    findAndInsert(this.root);

    this.size++;

  }
};

/*
 *  1. Write a function that takes in an array of integers and performs the 
 *     insert method on each item of the array in order.
 * 
 *  Input: Array
 *  Output: Binary Search Tree
 *
 *  Example: [4, 2, 5, 1, 3, 7, 6, 8]
 *  Output this binary search tree:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */

BinarySearchTree.prototype.insertMany = function(arr){
  for (var i = 0; i < arr.length; i++){
    this.insert(arr[i]);
  }
};

var test = new BinarySearchTree();
test.insertMany([4, 2, 5, 1, 3, 7, 6, 8]);

/*
 *  2. Given the example output binary search tree from Problem 1, what would 
 *     the order of values printed be if we used:
 *
 *     a. BREADTH FIRST traversal [4,2,5,1,3,7,6,8]
 *
 *     b. PRE-ORDER DEPTH first traversal [4,2,1,3,5,7,6,8]
 *
 *     c. IN-ORDER DEPTH first traversal [1,2,3,4,5,6,7,8]
 *
 *     d. POST-ORDER DEPTH first traversal [1,3,2,6,8,7,5,4]
 */


/*
 *  3a. Using a queue, and while loop write a function that takes in a binary 
 *      search tree and outputs an array of values ordered by BREADTH FIRST 
 *      traversal.
 *
 *  Input: Binary Search Tree
 *  Output: Array
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  NOTE: Confirm with your answer from problem 2a.
 */

BinarySearchTree.prototype.breadthFirst = function(){
  if (this.root === null){return [];}
  var result = [];
  var queue = [];
  queue.push(this.root);
  var currentNode;
  
  while (queue.length > 0){
    currentNode = queue.shift();

    if (currentNode.leftChild !== null){
      queue.push(currentNode.leftChild);
    }
    if (currentNode.rightChild !== null){
      queue.push(currentNode.rightChild);
    }

    result.push(currentNode.value);
  }

  return result;
};


/*
 *  3b. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2b.
 */

BinarySearchTree.prototype.preDepthFirst = function(){
  var result = [];

  function traverse(currentNode){
    if (currentNode === null){
      return;
    }

    result.push(currentNode.value);
    traverse(currentNode.leftChild);
    traverse(currentNode.rightChild);
  }

  traverse(this.root);

  return result;
};


/*
 *  3c. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2c.
 */


BinarySearchTree.prototype.inDepthFirst = function(){
  var result = [];

  function traverse(currentNode){
    if (currentNode === null){
      return;
    }

    traverse(currentNode.leftChild);
    result.push(currentNode.value);
    traverse(currentNode.rightChild);
  }

  traverse(this.root);

  return result;
};


/*
 *  3d. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2d.
 */


BinarySearchTree.prototype.postDepthFirst = function(){
  var result = [];

  function traverse(currentNode){
    if (currentNode === null){
      return;
    }

    traverse(currentNode.leftChild);
    traverse(currentNode.rightChild);
    result.push(currentNode.value);
  }

  traverse(this.root);

  return result;
};









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



console.log('insertMany tests');
var testCount = [0, 0];

assert(testCount, 'able to take in array of values and create binary search tree with corresponding values', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  return results.root.value === 4 &&
    results.root.leftChild.value === 2 && 
    results.root.leftChild.leftChild.value === 1 && 
    results.root.leftChild.rightChild.value === 3 && 
    results.root.rightChild.value === 5 && 
    results.root.rightChild.rightChild.value === 7 && 
    results.root.rightChild.rightChild.leftChild.value === 6 && 
    results.root.rightChild.rightChild.rightChild.value === 8; 
});

assert(testCount, 'able to take in empty array and not create any nodes in BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  return results.root === null;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('breadthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in breadth first manner - [4,2,5,1,3,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.breadthFirst();
  return arraysEqual(test, [4,2,5,1,3,7,6,8]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.breadthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('preDepthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in pre-order depth first manner - [4,2,1,3,5,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.preDepthFirst();
  return arraysEqual(test, [4,2,1,3,5,7,6,8]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.preDepthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('inDepthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in in-order depth first manner - [4,2,1,3,5,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.inDepthFirst();
  return arraysEqual(test, [1,2,3,4,5,6,7,8]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.inDepthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('postDepthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in post-order depth first manner - [4,2,1,3,5,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.postDepthFirst();
  return arraysEqual(test, [1,3,2,6,8,7,5,4]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.postDepthFirst();
  return arraysEqual(test, []);
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


