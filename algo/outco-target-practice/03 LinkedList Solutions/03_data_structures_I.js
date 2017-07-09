/*
 *                       Target Practice III                         
 *                                                                   
 *                        Data Structures I                          
 *                                                                   
 *  Instructions: Using the LinkedList class from your homework, add the 
 *                following methods to your LinkedList.      
 *
 */

'use strict';
var runTests = true;

// instantiation for ListNode
var ListNode = function(value){
  this.value = value;
  this.next = null;
};

// instantiation for LinkedList
var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
};

// append method for LinkedList
LinkedList.prototype.append = function(value){
  if (this.head === null){
    // initializing value being inserted into an empty LinkedList
    this.head = new ListNode(value);
    this.tail = this.head;
    this.listLength++;
  } else {
    // adding a value to a LinkedList of one or more items
    this.tail.next = new ListNode(value);
    this.tail = this.tail.next;
    this.listLength++;
  }
};

// insert method for LinkedList
LinkedList.prototype.insert = function(insertValue, searchValue){
  var cNode = this.head;
  while (cNode !== null){
    if (cNode.value === searchValue){
      var reference = cNode.next;
      cNode.next = new ListNode(insertValue);
      cNode.next.next = reference;

      if (reference === null){
        // for when the searchValue is the tail value, we 
        // need to reassign the LinkedList tail
        this.tail = cNode.next;
      }
      this.listLength++;
      return;
    }
    cNode = cNode.next;
  }
  console.log("second argument " + "'" + searchValue + "'" + " was not found in LinkedList");
};

LinkedList.prototype.delete = function(location){

  if (location === 0 && this.head !== null && this.head === this.tail){
    // case when LinkedList consists of a single element
    this.head = null;
    this.tail = null;
    this.listLength--;
    return;
  } else if (location === 0 && this.head !== null && this.head.next !== null){
    // case when LinkedList has more than one element, but 
    // zeroth element is being removed
    this.head = this.head.next;
    this.listLength--;
    return;
  }

  var cNode = this.head;
  var counter = 0;
  while (cNode !== null){
    if (counter === (location-1) && cNode.next !== null && cNode.next === this.tail){
      // case when removing the last element of LinkedList
      cNode.next = cNode.next.next;
      this.tail = cNode;
      this.listLength--;
      return;
    } else if (counter === (location-1) && cNode.next !== null){
      // case when removing values that are not the head or tail
      cNode.next = cNode.next.next;
      this.listLength--;
      return;
    }
    counter++;
    cNode = cNode.next
  }
  console.log('Error: Index ' + "'" + location + "'" + ' falls out of the range of the length of the LinkedList');
};

LinkedList.prototype.contains = function(value){
  var cNode = this.head;
  while (cNode !== null){
    if (cNode.value === value){
      return true;
    }
    cNode = cNode.next;
  }
  return false;
};



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

var test = new LinkedList();
test.append(1);
test.append(5);
test.append(7);
test.append(10);

// console.log(test.head);
// console.log(test.tail);


LinkedList.prototype.printForward = function(){
  var currentNode = this.head;

  while (currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

// test.printForward();



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

LinkedList.prototype.printBackward = function(){

  var traverse = function(currentNode){
    if (currentNode === null){
      return;
    }

    traverse(currentNode.next);

    console.log(currentNode.value);
  };
  traverse(this.head);

};

// test.printBackward();



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

// LinkedList.prototype.reverse = function(){
//   var tempLinkedList = new LinkedList();

//   var traverse = function(currentNode){
//     if (currentNode === null){
//       return;
//     }

//     traverse(currentNode.next);

//     tempLinkedList.append(currentNode.value);
//   };
//   traverse(this.head);

//   this.head = tempLinkedList.head;
//   this.tail = tempLinkedList.tail;
//   this.listLength = tempLinkedList.listLength;

// };


// Iterative approach
LinkedList.prototype.reverse = function(){
  // - empty linked list
  // - single-element linked list

  var cNode = this.head;
  this.tail = cNode;
  var soFar = null;
  var nextTemp;

  while (cNode !== null){
    nextTemp = cNode.next;
    cNode.next = soFar;
    soFar = cNode;
    cNode = nextTemp;
  };

  this.head = soFar;

};

// test.reverse();
// test.printForward();
// console.log(test.listLength);


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

LinkedList.prototype.swap = function(a, b){
  var nodeA, beforeA, afterA, nodeB, beforeB, afterB; 
  var cNode = this.head;

  if (a === b){
    // error handling if user tries to input the same value for arguments
    console.log('arguments cannot be the same value');
    return;
  }

  if (this.head.value === a){
    nodeA = this.head;
    beforeA = null;
    afterA = this.head.next;
  } else if (this.head.value === b){
    nodeB = this.head;
    beforeB = null;
    afterB = this.head.next;
  }

  while (cNode !== null){
    if (cNode.next !== null && cNode.next.value === a && nodeA === undefined){
      beforeA = cNode;
      nodeA = cNode.next;
      afterA = cNode.next.next;
    } else if (cNode.next !== null && cNode.next.value === b && nodeB === undefined){
      beforeB = cNode;
      nodeB = cNode.next;
      afterB = cNode.next.next;
    }
    cNode = cNode.next;
  }
  
  // console.log(beforeA);
  // console.log(nodeA);
  // console.log(afterA);
  // console.log(beforeB);
  // console.log(nodeB);
  // console.log(afterB);
  
  if (nodeA !== undefined && nodeB !== undefined){
    if (afterA === nodeB){
      // nodeA is directly before nodeB
      if (nodeA === this.head && nodeB === this.tail){
        // nodeA is the head and nodeB is the tail
        nodeA.next = afterB;
        nodeB.next = nodeA;
        this.head = nodeB;
        this.tail = nodeA;
      } else if (nodeA === this.head){
        // nodeA is the head node;
        nodeA.next = afterB;
        nodeB.next = nodeA;
        this.head = nodeB;
      } else if (nodeB === this.tail){
        // nodeB is the tail node
        beforeA.next = nodeB;
        nodeB.next = nodeA;
        nodeA.next = null;
        this.tail = nodeA;
      } else {
        // neither nodeA nor nodeB are the heads or tail
        nodeA.next = null;
        nodeB.next = null;
        console.log('here');
        nodeB.next = nodeA;
        beforeA.next = nodeB;
        nodeA.next = afterB;
      }
    } else if (afterB === nodeA){
      // nodeB is directly before nodeA
      if (nodeB === this.head && nodeA === this.tail){
        // nodeB is the head and nodeA is the tail
        nodeA.next = nodeB;
        nodeB.next = null;
        this.head = nodeA;
        this.tail = nodeB;
      } else if (nodeB === this.head){
        // nodeB is the head node;
        nodeA.next = nodeB;
        nodeB.next = afterA;
        this.head = nodeA;
      } else if (nodeA === this.tail){
        // nodeA is the tail node
        beforeB.next = nodeA;
        nodeA.next = nodeB;
        nodeB.next = null;
        this.tail = nodeB;
      } else {
        // neither nodeB nor nodeA are the heads or tail
        beforeB.next = nodeA;
        nodeA.next = nodeB;
        nodeB.next = afterA;
      }
    } else if (afterA !== nodeB && afterB !== nodeA){
      // nodeA and nodeB are separated by one or more nodes
      if (nodeA === this.head){
        // nodeA is head
        this.head = nodeB;
        nodeB.next = afterA;
        beforeB.next = nodeA;
        nodeA.next = afterB;
        if (nodeB === this.tail){
          // nodeA is head and nodeB is tail
          this.tail = nodeA;
        } 
      } else if (nodeB === this.head){
        // nodeB is head
        this.head = nodeA;
        nodeA.next = afterB;
        beforeA.next = nodeB;
        nodeB.next = afterA;
        if (nodeA === this.tail){
          // nodeB is head and nodeA is tail
          this.tail = nodeB;
        } 
      } else if (nodeA === this.tail){
        // nodeA is tail and nodeB is not head
        beforeB.next = nodeA;
        nodeA.next = afterB;
        beforeA.next = nodeB;
        nodeB.next = afterA;
        this.tail = nodeB;
      } else if (nodeB === this.tail){
        // nodeA is tail and nodeB is not head
        beforeA.next = nodeB;
        nodeB.next = afterA;
        beforeB.next = nodeA;
        nodeA.next = afterB;
        this.tail = nodeA;
      }
    }
      
  } else {
    // error messages if either nodeA or nodeB are undefined
    if (nodeA === undefined){
      console.log('first argument was not found in linkedList');
    }
    if (nodeB === undefined){
      console.log('second argument was not found in linkedList');
    }
    return;
  }
};

// test.printForward();
// test.swap(5, 10);
// console.log('*****');
// test.printForward();



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
};


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


// For your input, use circularNode as a node in a circular linked_list and 
// terminalNode as a node in a terminating linked_list

var isCircular = function(node){
  // YOUR WORK HERE

  var turtle = node;
  var hare = node;

  var turtleCanTravel = false;

  while (hare !== null){
    hare = hare.next;

    if (turtleCanTravel){
      turtle = turtle.next;
      turtleCanTravel = false;
    } else {
      turtleCanTravel = true;
    }

    if (turtle === hare){
      return true;
    }
  }

  return false;

};


// console.log(isCircular(terminalNode));
// console.log(isCircular(circularNode));






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



