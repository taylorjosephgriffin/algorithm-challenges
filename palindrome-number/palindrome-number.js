function isPalindrome(num) {
  if (typeof num !== 'number' || !num) return null

  const reversedNumber = Number(num.toString().split('').reverse().join(''))

  return reversedNumber === num
    ? true
    : false
}

module.exports = isPalindrome
