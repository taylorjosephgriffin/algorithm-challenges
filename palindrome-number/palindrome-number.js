function isPalindrome(num) {
  const reversedNumber = Number(num.toString().split('').reverse().join(''))
  
  if (typeof num !== 'number' || !num) return null

  return reversedNumber === num
    ? true
    : false
}

module.exports = isPalindrome
