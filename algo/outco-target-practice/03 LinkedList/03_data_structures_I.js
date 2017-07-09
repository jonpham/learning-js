/*
 *                       Target Practice III                         
 *                                                                   
 *                        Data Structures I                          
 *                                                                   
 *  Instructions: Using the LinkedList class from your homework,     
 *                add the following methods to your LinkedList.      
 *                
 */

'use strict';

/*
 * 1a. Create a method on the singly LinkedList class which prints the value of 
 *     each node from the head to the tail
 *
 * Input: N/A
 * Output: Print all elements from head to tail
 *
 * Example: (1) --> (5) --> (7) --> (10) .printForward()
 *          Head                    Tail
 *          1
 *          5
 *          7
 *          10
 *
 * What is the time and auxiliary space complexity of your solution?
 */



/*
 * 1b. Create a method on the singly LinkedList class which prints the value of 
 *     each node from tail to head using recursion
 *
 * Input: N/A
 * Output: Print all elements from tail to head
 *
 * Example: (1) --> (5) --> (7) --> (10) .printBackward()
 *          Head                    Tail
 *          10
 *          7
 *          5
 *          1
 *
 * What is the time and auxiliary space complexity of your solution?
 */



/*
 * 1c. Create a method on the singly LinkedList class that reverses the order of 
 *     the nodes in the linked list
 *
 * Input: N/A
 * Output: Reverse the order of the nodes
 *
 * Example: (1) --> (5) --> (7) --> (10) .reverse()
 *          Head                    Tail
 *
 *          (10) --> (7) --> (5) --> (1)
 *          Head                    Tail
 *
 * What is the time and auxiliary space complexity of your solution?
 */



/*
 * 1d. Create a method on the singly LinkedList class which swaps the first 
 *     occurance of the locations of two nodes in the linked list.
 *
 * Input: Two values (a & b)
 * Output: Swapped nodes containing values a & b
 *
 * Example: (1) --> (5) --> (7) --> (10) .swap(5, 10)
 *          Head                    Tail
 *
 *          (1) --> (10) --> (7) --> (5)
 *          Head                    Tail
 *
 * What is the time and auxiliary space complexity of your solution?
 */



/*
 *     Extra Credit     
 */

/*
 * Extra Credit 1:
 *
 * Write a function that, given an input of a ListNode, returns true if the 
 * ListNode is in a circular linked_list, and false if the ListNode is in a 
 * linked_list that terminates.
 */

// instantiation for ListNode
var ListNode = function(value){
  this.value = value;
  this.next = null;
}


// setup of node in a circular linked_list
var circularNode = new ListNode(Math.floor(Math.random() * 10000));
var currentNode = circularNode;
var circleSize = Math.floor(Math.random() * (10000 - 100) + 100);

for (var i = 0; i < circleSize; i++){
  currentNode.next = new ListNode(Math.floor(Math.random() * 10000));
  currentNode = currentNode.next;
  if (i === (circleSize - 1)){
    // connects the last node to the original circularNode
    currentNode.next = circularNode;
  }
}
// circular linked_list circularNode is ready for use


// setup of a node in a linked_list that terminates
var terminalNode = new ListNode(Math.floor(Math.random() * 10000));
var currentNode = terminalNode;
var listSize = Math.floor(Math.random() * (10000 - 100) + 100);

for (var i = 0; i < listSize; i++){
  currentNode.next = new ListNode(Math.floor(Math.random() * 10000));
  currentNode = currentNode.next;
}
// terminating linked_list terminalNode is ready for use


// For your input, use circularNode as a node in a circular linked_list
// and terminalNode as a node in a terminating linked_list

var isCircular = function(node){
  // YOUR WORK HERE



};










////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var record = [];


console.log('linkedList instantiation tests');
var testCount = [0, 0];

assert(testCount, 'able to create a linkedList instance', function(){
  var test = new LinkedList();
  test.append(1);
  test.append(5);
  test.append(7);
  test.append(10);
  return test !== undefined &&
    test.head.value === 1 &&
    test.tail.value === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printForward tests');
var testCount = [0, 0];

assert(testCount, 'should be able to print forward ' + 
  'elements of linked list 1 --> 5 --> 7 --> 10', function(){
  record = captureLog(function(){
    var test = new LinkedList();
    test.append(1);
    test.append(5);
    test.append(7);
    test.append(10);
    test.printForward();
  });
  return record.length === 4 && 
    record[0] === 1 &&
    record[1] === 5 &&
    record[2] === 7 &&
    record[3] === 10;
});

assert(testCount, 'should be able to print forward with single element' + 
  ' linked list 1', function(){
  record = captureLog(function(){
    var test = new LinkedList();
    test.append(1);
    test.printForward();
  });
  return record.length === 1 && 
    record[0] === 1;
});

assert(testCount, 'should print nothing for empty linked list', function(){
  record = captureLog(function(){
    var test = new LinkedList();
    test.printForward();
  });
  return record.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printBackward tests');
var testCount = [0, 0];

assert(testCount, 'should be able to print backward ' + 
  'elements of linked list 1 --> 5 --> 7 --> 10', function(){
  record = captureLog(function(){
    var test = new LinkedList();
    test.append(1);
    test.append(5);
    test.append(7);
    test.append(10);
    test.printBackward();
  });
  return record.length === 4 && 
    record[0] === 10 &&
    record[1] === 7 &&
    record[2] === 5 &&
    record[3] === 1;
});

assert(testCount, 'should be able to print backward with single element' + 
  ' linked list 1', function(){
  record = captureLog(function(){
    var test = new LinkedList();
    test.append(1);
    test.printBackward();
  });
  return record.length === 1 && 
    record[0] === 1;
});

assert(testCount, 'should print nothing for empty linked list', function(){
  record = captureLog(function(){
    var test = new LinkedList();
    test.printBackward();
  });
  return record.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('reverse tests');
var testCount = [0, 0];

assert(testCount, 'should be able to reverse 1 --> 5 --> 7 --> 10 ' + 
  'to be 10 --> 7 --> 5 --> 1', function(){
  var test = new LinkedList();
  test.append(1);
  test.append(5);
  test.append(7);
  test.append(10);
  test.reverse();
  return test.head.value === 10 && test.tail.value === 1;
});

assert(testCount, 'should be able to handle single element linked lists', function(){
  var test = new LinkedList();
  test.append(1);
  test.reverse();
  return test.head.value === 1 && test.tail.value === 1;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('swap tests');
var testCount = [0, 0];

assert(testCount, 'should be able to swap 1 and 5 to change [1,5,7,10] linked ' + 
  'list to look like [5,1,7,10]', function(){
  var test = new LinkedList();
  record = captureLog(function(){
    test.append(1);
    test.append(5);
    test.append(7);
    test.append(10);
    test.swap(1, 5);
    test.printForward();
  });
  return record.length === 4 &&
    record[0] === 5 &&
    record[1] === 1 &&
    record[2] === 7 &&
    record[3] === 10;
});

assert(testCount, 'should be able to swap 1 and 7 to change [1,5,7,10] linked ' + 
  'list to look like [7,5,1,10]', function(){
  var test = new LinkedList();
  record = captureLog(function(){
    test.append(1);
    test.append(5);
    test.append(7);
    test.append(10);
    test.swap(1, 7);
    test.printForward();
  });
  return record.length === 4 &&
    record[0] === 7 &&
    record[1] === 5 &&
    record[2] === 1 &&
    record[3] === 10;
});

assert(testCount, 'should be able to swap 1 and 10 to change [1,5,7,10] linked ' + 
  'list to look like [10,5,7,1]', function(){
  var test = new LinkedList();
  record = captureLog(function(){
    test.append(1);
    test.append(5);
    test.append(7);
    test.append(10);
    test.swap(1, 10);
    test.printForward();
  });
  return record.length === 4 &&
    record[0] === 10 &&
    record[1] === 5 &&
    record[2] === 7 &&
    record[3] === 1;
});

assert(testCount, 'should be able to swap 5 and 10 to change [1,5,7,10] linked ' + 
  'list to look like [1,10,7,5]', function(){
  var test = new LinkedList();
  record = captureLog(function(){
    test.append(1);
    test.append(5);
    test.append(7);
    test.append(10);
    test.swap(5, 10);
    test.printForward();
  });
  return record.length === 4 &&
    record[0] === 1 &&
    record[1] === 10 &&
    record[2] === 7 &&
    record[3] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('isCircular tests');
var testCount = [0, 0];

assert(testCount, 'should return true for circular linked list', function(){
  var test = isCircular(circularNode);
  return test === true;
});

assert(testCount, 'should return false for terminal linked list', function(){
  var test = isCircular(terminalNode);
  return test === false;
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



