var prompt=require('prompt-sync')();
var utility=require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js');

function cashCounter()
{
    var customers =prompt("Enter the number of persons: ");
    utility.cashCounter(customers);
}
cashCounter();