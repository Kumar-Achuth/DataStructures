"use strict"
let prompt = require('prompt-sync')();

let utility =require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')


let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

let anag = [];
/* Drier program to test above functions*/
function main() 
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
    GetNth(index) 
    {   
        
        var  current = this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.element; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        return 0; 
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
    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');


    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        
         prime = utility.prime(num1,num2);

         console.log('Prime are .................');
         console.log(prime);

         let anagram = [];
         
    for(let i=0; i<prime.length-1 ; i++) {

        for(let j=i+1 ; j< prime.length ; j++) {

           var  index1 = prime[i].toString();

            var index2 = prime[j].toString();
   
            let res1 = utility.anagrams(index1,index2);
   
            if (res1) {
                anagram.push(prime[i]);
                anagram.push(prime[j]);
            }

        }
    }

    

      var anag = removeDuplicates(anagram);

     console.log('Anagrams in the range are :' + anag);
     

    function removeDuplicates(arr){

        let unique_array = [];

        
        for(let i = 0;i < arr.length; i++){

            if(unique_array.indexOf(arr[i]) == -1){

                unique_array.push(arr[i])
            }
        }

        return unique_array;
        
      
         
    }
        }
       

    
    let llist = new LinkedList(); 

    for(let i = 0; i < anag.length; i++) {

        llist.add(anag[i]); 

    }

    let res = llist.printList();

    console.log(res);
    
    //console.log("Element at index 1 is "+llist.GetNth(1)); 

    let stack = new Stack();

    for(let i = 0; i < anag.length; i++) {

        let temp = llist.GetNth(i);

        stack.push(temp);
         

    }

    let out = stack.printStack();
    console.log('elements in stack are :'+ out);

    for(let i = anag.length; i > 0 ; i--) {

        console.log(stack.pop());
    }
} 
main()
