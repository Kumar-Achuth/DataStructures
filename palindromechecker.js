var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
function palindromeChecker()
{
    var string = prompt('Enter the string to be checked : ')
    utility.palindromeChecker(string=string.replace(/ /g,""))
}
palindromeChecker()
