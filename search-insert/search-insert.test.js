const searchInsert = require('./search-insert.js')

describe('Return the index of either where the target is in an array or where it should be.', () => {
  it('Returns the index where the element is if the element is present.', () => {
    const nums = [1, 2, 3, 4]
    const target = 3

    expect(searchInsert(nums, target)).toEqual(2)
  }),
  it('Returns the index of where the element would be if it was present.', () => {
    const nums = [2, 3, 5, 6]
    const target = 4

    expect(searchInsert(nums, target)).toEqual(2)
  })
})
