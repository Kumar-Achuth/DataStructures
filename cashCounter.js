/**
 * @description : Create a Program which creates Banking Cash Counter where people
come in to deposit Cash and withdraw Cash. Have an input panel to add people
to Queue to either deposit or withdraw money and dequeue the people. Maintain
the Cash Balance.
 */
var prompt=require('prompt-sync')();
var utility=require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js');

function cashCounter()
{
    var customers =prompt("Enter the number of persons: ");
    utility.cashCounter(customers);
}
cashCounter();