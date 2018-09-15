/**
 * @description : Extend the Prime Number Program and store only the numbers in that range that are
Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
Further store in a 2D Array the numbers that are Anagram and numbers that are not
Anagram
 */
"use strict"
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];



function primeAnagram() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        
         prime = utility.prime(num1,num2);

         console.log('\n Prime numbers given in the range are : \n');
         console.log(prime);

         let anagram = [];
         let anagramNot = [];

    for(let i=0; i<prime.length-1 ; i++) {

        for(let j=i+1 ; j< prime.length ; j++) {

           var  index1 = prime[i].toString();

           var  index2 = prime[j].toString();
   
            let res1 = utility.anagrams(index1,index2);
   
            if (res1) {
                anagram.push(prime[i]);
                anagram.push(prime[j]);

              /*  console.log();
                console.log(prime[i] + ' and '+ prime[j] + ' are anagrams');*/
            }

            else {

                anagramNot.push(prime[i]);
                anagramNot.push(prime[j]);
            }
        }
    }

    let anag = [];

    let anagN = [];

     anag = removeDuplicates(anagram);

     anagN = removeDuplicates(anagramNot);

     /*console.log('Anagrams are .................');
     
     console.log(anag);

     console.log('Not Anagrams are .................');

     console.log(anagN);*/
     
     let res = [];

     
     res.push(anag);

     res.push(anagN);
    console.log('\n Prime numbers in the given range which are anagrams and not anagrams are :\n');
    
    console.log('\n 0 index--- Prime Anagrams \n \n 1 index--- Prime that are not Anagrams\n')
     console.log(res);
     
     

    

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
    }
    primeAnagram()
