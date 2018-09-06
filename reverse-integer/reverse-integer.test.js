const reverseInteger = require('./reverse-integer.js')

describe('Given a 32-bit integer, returns the reverse of given integer.', () => {
  
  it('Returns the reverse of the given integer.', () => {
    let number = 123

    expect(reverseInteger(number)).toEqual(321)
  }),

  it('Returns the reverse of a given negative integer', () => {
    let number = -123

    expect(reverseInteger(number)).toEqual(-321)
  }),

  it('Returns zero if the number is greater or less than a 32-bit integer.', () => {
    let number = 1534236469

    expect(reverseInteger(number)).toEqual(0)
  })
})
