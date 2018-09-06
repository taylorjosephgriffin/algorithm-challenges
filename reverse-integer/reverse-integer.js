/*
Given a 32-bit signed integer, reverse digits of an integer.

Assume we are dealing with an environment which could only store integers
within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this
problem, assume that your function returns 0 when the reversed integer overflows.
*/

function reverseInteger(num) {
    const max = Math.pow(2, 31)
    let numArr = num.toString().split('')
    let reversedNumber = null
    let neg = '-'

    numArr[0] === neg
        ? reversedNumber = parseInt(neg + numArr.reverse().join(''))
        : reversedNumber = parseInt(numArr.reverse().join(''))

    if (Math.abs(reversedNumber) >= Math.abs(max)) reversedNumber = 0

    return reversedNumber
};

module.exports = reverseInteger
