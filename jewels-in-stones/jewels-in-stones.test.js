const jewelsInStones = require('./jewels-in-stones.js')

describe('Returns the number of stones that are found in set of jewels.', () => {
  it('Returns the number of stones that are also found in jewels.', () => {
    const jewels = 'Aa'
    const stones = 'aaaaAbbB'

    expect(jewelsInStones(jewels, stones)).toBe(5)
  })
})
