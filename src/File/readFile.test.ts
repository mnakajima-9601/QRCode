const readFile = require('../File/readFile')

test('ファイル読み込みOK', () => {
  const path = require('path')
  const file = path.resolve() + '/CSV/test.csv'

  expect(readFile.outputText(file))
})

test('ファイル読み込みNG', () => {
  const path = require('path')
  const file = path.resolve() + '/CSV/test2.csv'

  expect(() => readFile.outputText(file)).toThrow()
})
