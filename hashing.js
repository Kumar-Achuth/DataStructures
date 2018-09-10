var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
var data = fs.readFileSync('hashfile.txt')
data =data.toString().split(' ')
function hashing()
{
    var number = prompt('Enter the number to be searched : ')
    utility.hashing(data, number)
}
hashing()