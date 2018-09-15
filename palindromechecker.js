/**
 * @description : A palindrome is a string that reads the same forward and backward, for
example, radar, toot, and madam. We would like to construct an algorithm to
input a string of characters and check whether it is a palindrome.
 */
var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/DataStructures/utility/utility.js')
function palindromeChecker()
{
    var string = prompt('Enter the string to be checked : ')
    utility.palindromeChecker(string=string.replace(/ /g,""))
}
palindromeChecker()
