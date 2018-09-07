"use strict"
var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
function balance()
{
    var expr = prompt('Enter the expression : ')
        utility.balance(expr)
    
}
balance()