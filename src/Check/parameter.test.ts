const parameter = require('../Check/parameter')

test('パラメータチェックOK', () => {
  expect(parameter.checkParameter('あ', 'テスト名称')).toEqual('あ')
})

test('パラメータチェックNG', () => {
  expect(() => parameter.checkParameter(null, 'テスト名称')).toThrow()
})
