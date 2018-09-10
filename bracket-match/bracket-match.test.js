const bracketsMatch = require('./bracket-match.js')

describe('Returns boolean depending on if string expression is correct', function () {
  it('returns true if it is correct', function () {
    let str = '[()]{}{[()()]()}'
    expect(bracketsMatch(str)).toBe(true)
  })

  it('returns false if it is incorrect', function () {
    let str = '[(])'
    expect(bracketsMatch(str)).toBe(false)
  })
})
