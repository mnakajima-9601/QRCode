const exist = require('../Check/exist')
const path = require('path')
const file = require('fs')

const folder = `${path.resolve()}/testExist`

// 存在チェック
test('存在チェック(OK:フォルダなし)', () => {
  expect(exist.checkExsit(folder)).toEqual(false)
})

test('存在チェック(OK:フォルダあり)', () => {
  file.mkdirSync(folder)
  console.log(`${folder}を作成しました`)

  expect(exist.checkExsit(folder)).toEqual(true)

  file.rmdirSync(folder)
  console.log(`${folder}を削除しました`)
})
