/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

function bracketsMatch(str) {
  let stack = []
  opening = ['(', '{', '[']
  closing = [')', '}', ']']

  for (let i = 0; i < str.length; i++) {
    if (closing.includes(str[i])) {
      let prevChar = stack.pop()
      if (prevChar !== opening[closing.indexOf(str[i])]) {
        return false
      }
    }
    else {
      stack.push(str[i])
    }
  }
  return (stack.length === 0)
}

module.exports = bracketsMatch
