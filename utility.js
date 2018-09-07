"use strict"
var fs = require('fs')
module.exports =
{
    unorderedlist : function(array,word)
    {
    class Node {
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    } 
    class LinkedList
    {
        constructor()
        {
            this.head == null;
            this.size == 0;
        }
        indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterae over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
    isEmpty()
    {
        return this.size == 0;
    }
    size_of_list()
    {
        console.log(this.size);
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    add(element)
    {
        // creates a new node
        var node = new Node(element);
     
        // to store current node
        var current;
     
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
     
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
     
            curr = this.head;
     
            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
     
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
     
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } 
            else 
            {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
     
            // return the remove element
            return curr.element;
        }
    }
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
     
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
    }
      // creating an object for the
    // Linkedlist class
    var ll = new LinkedList();
    for ( var i =0; i<array.length; i++)
    {
        ll.add(array[i])
    }
    if(ll.indexOf(word)==-1)
    {
        ll.add(word)
    }    
    else{
        ll.removeElement(word)
    }
    var res = ll.printList() 

    fs.writeFile('/home/bridgeit/Documents/kumar/DataStructures/main/intFile.txt',res)
    //ll.printList();
},
   orderedList : function(array, number)
   {
array.sort(function(a,b)
{
return a-b
})
console.log(array)
this.unorderedlist(array,number)
array.sort(function(a,b)
{
    return a-b
})
console.log(array)
   },
   balance : function(expr)
   {
   class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
    push(element)
{
    // push element into the items
    this.items.push(element);
}
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
// peek function
peek()
{
    // return the top most element from the stack
    // but doesn't delete it.
    return this.items[this.items.length - 1];
}
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
// printStack function
printStack()
{
    var str = ""; 
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}
var stack = new Stack()
var count = 0 , flag =0, a=0;
for (var i=0; i<expr.length; i++)
    {
        if (expr[i]=='(' ) 
        {
            // Push the element in the stack
            stack.push('(');
            count ++;
        }
        else if(expr[i]==')')
        {
            stack.pop()
            flag++;
        }
    }
 if(count == flag)
 {
     console.log(' Balanced ' )
 }
 else
 {
     console.log(" UnBalanced ")
 }
},
cashCounter : function()
{
    class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
    enqueue(element)
    {    
        // adding element to the queue
        this.items.push(element);
    }
    dequeue()
{
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
front()
{
    // returns the Front element of 
    // the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}
isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
}

var queue = new Queue();
// Testing dequeue and pop on an empty queue
// returns Underflow
console.log(queue.dequeue());
 
// returns true
console.log(queue.isEmpty());
 
// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
 
// returns 10
console.log(queue.front());
 
// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(queue.dequeue());
 
// returns 20
console.log(queue.front());
 
// removes 20
// queue contains [30, 40, 50, 60]
console.log(queue.dequeue());
 
// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(queue.printQueue())
},
}

