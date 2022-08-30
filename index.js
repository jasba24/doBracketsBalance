const splitBrackets = expression => {
  const symbols = []
  expression
    .split(/([\[\]\{\}\(\)])/)
    .map(e =>
      ['[', ']', '{', '}', '(', ')'].includes(e) ? symbols.push(e) : ''
    )

  return symbols
}

const identifyOpenBrackets = bracket => {
  const identifier = {
    '[': 1,
    '{': 3,
    '(': 5,
    ']': 2,
    '}': 4,
    ')': 6
  }
  const result = identifier[bracket]
  return result
}
