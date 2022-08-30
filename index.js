const splitBrackets = expression => {
  const symbols = []
  expression
    .split(/([\[\]\{\}\(\)])/)
    .map(e =>
      ['[', ']', '{', '}', '(', ')'].includes(e) ? symbols.push(e) : ''
    )

  return symbols
}

const removeItems = (positions, brackets) => {
  let finalPositions = positions
  let finalBrackets = brackets

  if (finalPositions[0].length !== 0) {
    for (let i = 0; i < finalPositions.length; i++) {
      if (finalPositions[0].findLast(e => e)[1] < finalPositions[1][0][1]) {
        delete finalBrackets[finalPositions[0].findLast(e => e)[1]]
        delete finalBrackets[finalPositions[1][0][1]]
        finalPositions = [[finalPositions[0][0]], [finalPositions[1][1]]]
      } else {
        if (finalPositions[1].length > 1) {
          if (finalPositions[0].findLast(e => e)[1] < finalPositions[1][1][1]) {
            delete finalBrackets[finalPositions[0].findLast(e => e)[1]]
            delete finalBrackets[finalPositions[1][1][1]]
            finalPositions = [[finalPositions[0][0]], [finalPositions[1][0]]]
          }
        } else {
          finalBrackets = false
        }
      }
    }
    return finalBrackets
  } else {
    return finalBrackets
  }
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
