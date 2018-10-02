const singleNumber = require('./single-number.js')

describe('Single number takes an array of numbers and returns the number that appears only once.', () => {
  it('Returns the number that occurs once.', () => {
    const array = [1, 2, 2, 2, 3, 3]

    expect(singleNumber(array)).toBe(1)
  })
})
