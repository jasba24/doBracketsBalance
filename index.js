const doBracketsBalance = string => {
  let openBrackets = string.match(/\[.*?/g) ?? []
  let closeBrackets = string.match(/\].*?/g) ?? []
  let openKeys = string.match(/\{.*?/g) ?? []
  let closeKeys = string.match(/\}.*?/g) ?? []
  let openParenthesis = string.match(/\(.*?/g) ?? []
  let closeParenthesis = string.match(/\).*?/g) ?? []

  if (
    openBrackets.length == closeBrackets.length &&
    openKeys.length == closeKeys.length &&
    openParenthesis.length == closeParenthesis.length
  ) {
    return true
  } else {
    return false
  }
}

module.exports = {
  doBracketsBalance
}
