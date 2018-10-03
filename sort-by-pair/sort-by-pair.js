/* Given an array A of non-negative integers, return an array consisting of all
the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition. */

var sortArrayByParity = function(array) {
    let even = array.filter(num => num % 2 === 0)
    let odd = array.filter(num => num % 2 !== 0)
    even.push(...odd)
    return even
}

module.exports = sortArrayByParity
