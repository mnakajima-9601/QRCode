const access = require('../Check/access')
const pat = require('path')
const f = require('fs')

const directoryA = `${pat.resolve()}/testAccess`

test('権限権限チェック(NG:存在なし)', () => {
  expect(() => access.checkAccess(null)).toThrow()
})

test('権限権限チェック(OK:権限あり)', () => {
  f.mkdirSync(directoryA, { mode: '777' })

  expect(access.checkAccess(directoryA)).toEqual(true)

  f.rmdirSync(directoryA)
})

test('権限権限チェック(OK:書き込み権限)', () => {
  f.mkdirSync(directoryA, { mode: '333' })

  expect(access.checkAccess(directoryA)).toEqual(true)

  f.rmdirSync(directoryA)
})

test('権限権限チェック(NG:読み込み権限)', () => {
  f.mkdirSync(directoryA, { mode: '555' })

  expect(() => access.checkAccess(directoryA)).toThrow()

  f.rmdirSync(directoryA)
})

test('権限権限チェック(NG:権限なし)', () => {
  f.mkdirSync(directoryA, { mode: '000' })

  expect(() => access.checkAccess(directoryA)).toThrow()

  f.rmdirSync(directoryA)
})
