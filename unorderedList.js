/**
 * @description : ­> Read the Text from a file, split it into words and arrange it as Linked List.
Take a user input to search a Word in the List. If the Word is not found then add it
to the list, and if it found then remove the word from the List. In the end save the
list into a file
 */
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



