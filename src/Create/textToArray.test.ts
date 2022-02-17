const textToArray = require('../Create/textToArray')

test('配列作成OK:区切り文字', () => {
  expect(textToArray.outputArray('アイウエオ,aiueo,kakikukeko'))
})

test('配列作成OK:ダブルクォーテーション', () => {
  expect(textToArray.outputArray('"アイウエオ""aiueo""kakikukeko"'))
})

test('配列作成NG', () => {
  expect(() => textToArray.outputArray(null)).toThrow()
})
