const saveName = require('../Create/saveName')

test('名称設定OK', () => {
  const array = ['a', 'i', 'u']
  expect(saveName.createNameMode1('aiueo', array, 0)).toEqual('aiueo_a_1')
})

test('名称設定NG:読み込みファイル名が空の場合', () => {
  const array = ['a', 'i', 'u']
  expect(() => saveName.createNameMode1(null, array, 1)).toThrow()
})

test('名称設定NG:ユーザーID(配列)が空の場合', () => {
  expect(() => saveName.createNameMode1('aiueo', null, 1)).toThrow()
})

test('名称設定NG:行数が空の場合', () => {
  const array = ['a', 'i', 'u']
  expect(() => saveName.createNameMode1('aiueo', array, null)).toThrow()
})

test('名称設定NG:全て空の場合', () => {
  expect(() => saveName.createNameMode1(null, null, null)).toThrow()
})
