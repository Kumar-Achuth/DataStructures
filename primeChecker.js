var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js');
function primeChecker() 
{
    var minimum = prompt(' Enter Number 1: ');
    var maximum = prompt(' Enter Number 2: ');
         minimum = parseInt(minimum);
         maximum = parseInt(maximum);
             utility.primeChecker(minimum,maximum);
        }
    