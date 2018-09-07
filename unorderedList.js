"use strict"
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')

var data = fs.readFileSync('file.txt')
data =data.toString().split(' ')
function unorderedlist()
{
    var word = prompt('Enter the word u want to search : ')  
    utility.unorderedlist(data, word)
}
unorderedlist()



