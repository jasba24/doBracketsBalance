const doBracketsBalance = string => {}

const splitCharacter = expression => {
  const symbols = []
  expression
    .split(/([\[\]\{\}\(\)])/)
    .map(e =>
      ['[', ']', '{', '}', '(', ')'].includes(e) ? symbols.push(e) : ''
    )

  return symbols
}



module.exports = {
  doBracketsBalance
}
