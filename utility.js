"use strict"
var fs = require('fs')
module.exports =
{
    /**
 * @description : ­> Read the Text from a file, split it into words and arrange it as Linked List.
Take a user input to search a Word in the List. If the Word is not found then add it
to the list, and if it found then remove the word from the List. In the end save the
list into a file
 */
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
        else 
        {
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
                while (it < index)
                 {
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
    sortList() {

        var swap;
        var current = this.head;
        var current1 = current.next;
        var n = this.size;

        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n - i - 1; j++) {

                if (parseInt(current1.element) < parseInt(current.element)) {

                    swap = current.element;

                    current.element = current1.element;

                    current1.element = swap;

                }

                if (current1.next != null) {

                    current = current1;

                    current1 = current1.next;

                }

            }

            current = this.head;

            current1 = current.next;
        }

        console.log('List sorted');
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
    ll.sortList()
    var res = ll.printList() 

    fs.writeFile('/home/bridgeit/Documents/kumar/DataStructures/main/intFile.txt',res)
    //ll.printList();
},
/**
 * @description : ­ Read a List of Numbers from a file and arrange it ascending Order in a
Linked List. Take user input for a number, if found then pop the number out of the
list else insert the number in appropriate position
 */
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
  // console.log(array)
   },
/**
 * @description : ­> Take an Arithmetic Expression such as
(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
performance of operations. Ensure parentheses must appear in a balanced
fashion.
 */
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
/**
 * @description : Create a Program which creates Banking Cash Counter where people
come in to deposit Cash and withdraw Cash. Have an input panel to add people
to Queue to either deposit or withdraw money and dequeue the people. Maintain
the Cash Balance.
 */
cashCounter : function(number)
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
length()
{
    return this.items.length;
}
}
var prompt = require('prompt-sync')()
var queue = new Queue();;
        var mainBalance= 125000;
        console.log('The Main Balance in the account is ' + mainBalance)

        for(var i=0; i<number; i++)
        {
            queue.enqueue(i);
        }
        console.log(queue.length());

        while(queue.length())
        {
            var choice= prompt("Enter 1 to withdraw and 2 to deposit amount: ");
            if(choice==1) 
            {
                var amount=prompt("Enter the amount to be withdrawn: ");
                if(mainBalance>=amount)
                {
                    mainBalance=parseInt(mainBalance)-parseInt(amount);
                    console.log("Current Available balanace= "+mainBalance+" rs");
                }else{
                    console.log("Please check your balance");
                    process.exit();
                }
            }
            else if(choice==2)
            {
                var amount=prompt("Enter the amount to be deposited: ");
                mainBalance=parseInt(mainBalance)+parseInt(amount);
                console.log("Total available balanace= "+mainBalance+" rs");
            }
            else{
                console.log("Could not proceeed ");
                break;
            }
            queue.dequeue();
            console.log('Current people in the queue are ' +queue.length())
        } 
    },
    /**
 * @description : A palindrome is a string that reads the same forward and backward, for
example, radar, toot, and madam. We would like to construct an algorithm to
input a string of characters and check whether it is a palindrome.
 */
    palindromeChecker : function(string)
    {
        function Deque()
        {
         this.items=new Array();
         this.popback=function(){
          return this.items.pop();
         }
         this.pushback=function(element){
          this.items.push(element);
         }
         this.popfront=function(){
          return this.items.shift();
         }
         this.pushfront=function(element){
          this.items.unshift(element);
         }
        this.printQueue=function()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
this.len=function()
{
    return this.items.length
}
        }
         var deque = new Deque()
         string= string.toLowerCase()
         for (var i=0; i<string.length; i++)
         {
             deque.pushfront(string[i])
         }
         
         var count =0 ; 
         console.log(deque.printQueue())
         while(deque.len())
         {
             if(deque.popfront()===deque.popback())
             {
                 count ++
             }
         }
         if(count == Math.floor(string.length/2))
         console.log('The given string is a palindrome ')
         else
         console.log('Not a palindrome ')
    },
    /**
 * @description : Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
efficiently search a number from a given set of number
 */
    hashing : function(array)
    {
        var prompt = require('prompt-sync')()
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
            else 
            {
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
                    while (it < index)
                     {
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
            return str;
                }
        }
        var i;
        var  a10=[],a11=[],a1=[],a2=[],a3=[],a4=[],a5=[],a6=[],a7=[],a8=[],a9=[]
        var list = new LinkedList();        
        var hash = fs.readFileSync('hashfile.txt');
    hash = hash.toString().split(" ");
    var arr = Array.from(hash);
    arr.sort();
    console.log(arr);
    var val = prompt("Please enter a value to search: ");
    for(var i=0;i<hash.length;i++)
    {
        list.add(hash[i]);
    }
    list.printList();
    var result = list.indexOf(val);
    console.log('The index of ' + val + ' is ' +list.indexOf(val) )
    if(result == -1)
    {
        console.log("Element not found!!");
       list.add(val);
    }
    else
    {
        console.log("Element found!!");       
        list.removeElement(val);
    }
        console.log(list.printList())
        for(var j =0 ; j<array.length; j++ )
        {
                    var reminder = parseInt(array[j]%11);
                    if (reminder == 0 )  
                    {
                         a10.push(array[j])
                    }
                    else if(reminder == 1)
                    {
                        a11.push(array[j])
                    }
                    else if(reminder == 2)
                    {
                            a1.push(array[j])
                    }
                    else if(reminder == 3)
                    {
                            a2.push(array[j])
                    }
                    else if(reminder == 4)
                    {
                            a3.push(array[j])
                    }
                    else if(reminder == 5)
                    {
                            a4.push(array[j])
                    }
                    else if(reminder == 6)
                    {
                            a5.push(array[j])
                    }
                    else if(reminder == 7)
                    {
                            a6.push(array[j])
                    }
                    else if(reminder == 8)
                    {
                            a7.push(array[j])
                    }
                    else if(reminder == 9)
                    {
                            a8.push(array[j])
                    }
                    else if(reminder == 10)
                    {
                            a9.push(array[j])
                    }
            }
            var array1 = [];
            array1.push(a10);
            array1.push(a11);
            array1.push(a1);
            array1.push(a2);
            array1.push(a3);
            array1.push(a4);
            array1.push(a5);
            array1.push(a6);
            array1.push(a7);
            array1.push(a8);
            array1.push(a9);

        for(var k=0;k<array1.length;k++)
        {
            console.log("Slot "+k+" --> "+array1[k].join('-->'));
        }
        fs.writeFile('/home/bridgeit/Documents/kumar/DataStructures/main/hash2.txt', array.join('-->') , function(){})
                },         
/**
 * @description : Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range. Store
the prime numbers in a 2D Array, the first dimension represents the range 0­100,
100­200, and so on. While the second dimension represents the prime numbers in
that range
 */
    checkPrime : function(min1,max1) { 

        let size = (Math.floor(max1/100) + 1);
        let range = Math.floor(min1/100);
    
        let arr1 = [];
    
       var  min = min1;
    
        if(min1 == 0) {
    
            var max = 99;
        }
    
        else {
        
        max = ((range+1)*100)-1;
    
        }
    
        for(let index = range+1 ; index <= size;index++) {
            if( (max-min) < 100 && max <= max1) {
                let prime = new Array();
                for(let i = min;i <= max;i++) {
                    let count = 0;
                    
                    for(let j = 1;j <= i;j++) {
                        if(i % j == 0) {
                            count++;
                        }   
                    }
                    if(count <= 2) {
                        prime.push(i);
                    }  
                } 
                arr1.push(prime);
                if(max1 - max < 100) {
    
                    range = Math.floor(min/100);
        
                    min = (min + ((range+1)*100)-min);
    
                    max = max1-1;
                }
                else {
    
                    range = Math.floor(min/100);
                    min = (min + ((range+1)*100)-min);
                    max = max + 100;
                }
            }  
        }
            console.log('\n Prime Numbers in the given range are :')
            console.log(arr1);
    }, 

    prime : function(min,max) {

        let prime = new Array();
     
        if(min == 0 || min == 1) {
            min = 2;
        }
    
            for(let i = min;i <= max;i++) {
                let count = 0;
                
                for(let j = 1;j <= i;j++) {
        
                    if(i % j == 0) {
    
                        count++;
                    }
                }
                if(count <= 2) {
    
                    prime.push(i);
                }  
            }
            return prime;
    },
    /**
     * @description : Extend the Prime Number Program and store only the numbers in that range that are
Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
Further store in a 2D Array the numbers that are Anagram and numbers that are not
Anagram
     */
    anagrams : function(str1,str2)
     {
        var arr1 = str1.split('');
        var arr2 = str2.split('');
        var array1 = this.removeSpace(arr1);
        var array2 = this.removeSpace(arr2);
    
        var res1 = array1.sort();
        var res2 = array2.sort();
    
        if(res1.length == res2.length) {
    
            var output = this.compare(res1,res2);
    
            if(output) {
                //console.log('given strings are anagram');
                return true;
            }
            else {
               // console.log('given strings are not anagram');
               return false;
            }
        }
        else {
            //console.log('given strings are not anagram');
            return false;
        }
    },
    removeSpace : function(array) {
    
        var newArray = [];
    for(let i=0;i<array.length;i++) {
    
        if(array[i] != ' ') {
            newArray.push(array[i]);
        }
     }
     return newArray;
    } ,
    compare : function(array1,array2) {
    
        let count = 0; 
        for(let i=0;i < array1.length ;i++) { 
            if(array1[i]==array2[i]) {
                count++
            }
        }
        return (array1.length == count);
    },
    }

