"use strict"
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
var data = fs.readFileSync('intFile.txt')
data =data.toString().split(' ')
function orderedList()
{
    var number = prompt('Enter the number u want to search : ')  
    utility.orderedList(data, number)
}
orderedList()