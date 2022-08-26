const { doBracketsBalance } = require('./index')

describe('Code Enterview', () => {
  test('Should "[abc]{" return false', () => {
    const expected = false
    const result = doBracketsBalance('[abc]{')
    expect(expected).toEqual(result)
  })
  test('Should "[]{}()" return true', () => {
    const expected = true
    const result = doBracketsBalance('[]{}()')
    expect(expected).toEqual(result)
  })
  test('Should "[a{b[c]d}e{f}g]" return true', () => {
    const expected = true
    const result = doBracketsBalance('[a{b[c]d}e{f}g]')
    expect(expected).toEqual(result)
  })
  test('Should "Hola mi nombre es}" return false', () => {
    const expected = false
    const result = doBracketsBalance('Hola mi nombre es}')
    expect(expected).toEqual(result)
  })
})
