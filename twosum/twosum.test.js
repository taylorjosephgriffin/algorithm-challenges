const twoSum = require('./twosum.js')

describe('Return indices of the two numbers such that they add up to a specific target.', () => {
  it('Returns the indices.', () => {
    let nums = [2, 7, 11, 15]
    let target = 9

    expect(twoSum(nums, target)).toEqual([0, 1])

    nums = [1, 2, 5, 4, 6]
    target = 11

    expect(twoSum(nums, target)).toEqual([2, 4])
  }),
  it('Return null when one or more parameters are not provided.', () => {
    let nums = [2, 7, 11, 15]

    expect(twoSum(nums)).toBe(null)
  })
})
