const splitBrackets = expression => {
  const symbols = []
  expression
    .split(/([\[\]\{\}\(\)])/)
    .map(e =>
      ['[', ']', '{', '}', '(', ')'].includes(e) ? symbols.push(e) : ''
    )

  return symbols
}

const doBracketsBalance = string => {
  const brackets = splitBrackets(string)
  let result = []
  let bracketPositions = [[], []]
  let keysPositions = [[], []]
  let parenthesisPositions = [[], []]

  for (let i = 0; i < brackets.length; i++) {
    result.push(identifyOpenBrackets(brackets[i]))
  }

  result.map((e, i) => {
    switch (e) {
      case 1:
        bracketPositions[0].push([1, i])
        break
      case 2:
        bracketPositions[1].push([2, i])
        break
      case 3:
        keysPositions[0].push([3, i])
        break
      case 4:
        keysPositions[1].push([4, i])
        break
      case 5:
        parenthesisPositions[0].push([5, i])
        break
      case 6:
        parenthesisPositions[1].push([6, i])
        break
    }
  })

  let finalResult = result

  if (brackets.includes('[') || brackets.includes(']')) {
    finalResult = removeItems(bracketPositions, finalResult)
  }
  if (brackets.includes('{') || brackets.includes('}')) {
    finalResult = removeItems(keysPositions, finalResult)
  }

  if (brackets.includes('(') || brackets.includes(')')) {
    finalResult = removeItems(parenthesisPositions, finalResult)
  }

  if (finalResult !== false) {
    finalResult = true
  }
  return finalResult
}

const removeItems = (positions, brackets) => {
  let finalPositions = positions
  let finalBrackets = brackets

  if (finalPositions[0].length !== 0 || finalPositions[0].length > 2) {
    for (let i = 0; i < finalPositions[0].length; i++) {
      if (finalPositions[1][0] !== undefined) {
        if (
          finalPositions[0][finalPositions[0].length - 1][1] <
          finalPositions[1][0][1]
        ) {
          delete finalBrackets[
            finalPositions[0][finalPositions[0].length - 1][1]
          ]
          delete finalBrackets[finalPositions[1][0][1]]
          finalPositions = [[finalPositions[0][0]], [finalPositions[1][1]]]
        } else {
          if (finalPositions[1].length > 1) {
            if (
              finalPositions[0][finalPositions[0].length - 1][1] <
              finalPositions[1][1][1]
            ) {
              delete finalBrackets[
                finalPositions[0][finalPositions[0].length - 1][1]
              ]
              delete finalBrackets[finalPositions[1][1][1]]
              finalPositions = [[finalPositions[0][0]], [finalPositions[1][0]]]
            }
          } else {
            finalBrackets = false
          }
        }
      } else {
        finalBrackets = false
      }
    }

    return finalBrackets
  } else {
    finalBrackets = false
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

module.exports = {
  doBracketsBalance
}
