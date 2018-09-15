/**
 * @description : ­> Take an Arithmetic Expression such as
(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
performance of operations. Ensure parentheses must appear in a balanced
fashion.
 */
"use strict"
var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
function balance()
{
    var expr = prompt('Enter the expression : ')
        utility.balance(expr)
}
balance()