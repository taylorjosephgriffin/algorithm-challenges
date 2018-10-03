const sortArrayByParity = require('./sort-by-pair.js')

describe('Given an array of nums, return an array of even followed by odd numbers.', () => {
  it('Returns an array of even numbers followed by odd numbers.', () => {
    const array = [4, 3, 2, 1]

    expect(sortArrayByParity(array)).toEqual([4, 2, 3, 1])
  })
})
