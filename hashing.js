/**
 * @description : Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
efficiently search a number from a given set of number
 */
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
var data = fs.readFileSync('hashfile.txt')
data =data.toString().split(' ')
function hashing()
{
    utility.hashing(data)
}
hashing()