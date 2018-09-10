const isPalindrome = require('./palindrome-number.js')

describe('Returns whether or not a given number is a palindrome', () => {
  it('Returns true if the number is a palindrome', () => {
    const number = 345543

    expect(isPalindrome(number)).toBe(true)
  }),
  it('Returns false if the number is not a palindrome', () => {
    const number = -123

    expect(isPalindrome(number)).toBe(false)
  }),
  it('Returns null if a number is not provided', () => {

    expect(isPalindrome()).toBe(null)
  }),
  it('Returns null if a the provided argument is not a number', () => {
    const number = 'string'

    expect(isPalindrome(number)).toBe(null)
  })
})
