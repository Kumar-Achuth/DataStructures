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

    fs.writeFile('/home/bridgeit/Documents/kumar/DataStructures/main/file.txt',res)
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
    hashing : function(array, number)
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
        var arr=[],a1=[],a2=[],a3=[],a4=[],a5=[],a6=[],a7=[],a8=[],a9=[]
        var row =10;
        var ll = new LinkedList();        
        console.log(array)
        var arr = new Array(row) ;
        for(var j =0 ; j<array.length; j++ )
        {
                    var reminder = parseInt(array[j]%11);
                    if (reminder == 0 )  
                    {
                         ll.add(array[j])
                    }
                    else if(reminder == 1)
                    {
                        arr.push(array[j])
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
        console.log('Slot 0 is : '+(ll.printList()))
              console.log('Slot 1 is : '+arr)
              console.log('Slot 2 is : '+a1)
              console.log('Slot 3 is : '+a2)
              console.log('Slot 4 is : '+a3)
              console.log('Slot 5 is : '+a4)
              console.log('Slot 6 is : '+a5)
              console.log('Slot 7 is : '+a6)
              console.log('Slot 8 is : '+a7)
              console.log('Slot 9 is : '+a8)
              console.log('Slot 10 is : '+a9)
                },         

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
    
    anagrams : function(str1,str2) {
    
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

