/**
 * @description : Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range. Store
the prime numbers in a 2D Array, the first dimension represents the range 0­100,
100­200, and so on. While the second dimension represents the prime numbers in
that range
 */
"use strict"
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;



function prime() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        
             utility.checkPrime(num1,num2);

        }
    }
    prime()