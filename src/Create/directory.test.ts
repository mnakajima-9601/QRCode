const directory = require('../Create/directory')
test('ディレクトリ作成OK', () => {
  const path = require('path')
  const fs = require('fs')

  const folder = `${path.resolve()}/testDirectory`

  expect(directory.createDirectory(folder))
  fs.rmdirSync(folder)
  console.log(`${folder}を削除しました`)
})
test('ディレクトリ作成NG', () => {
  expect(() => directory.createDirectory(null)).toThrow()
})
