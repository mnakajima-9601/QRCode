const qrCode = require('../Create/qrCode')
const p = require('path')
const fsmkdir = require('fs')

const destinationfolder = `${p.resolve()}/testQrCode`

fsmkdir.mkdirSync(destinationfolder)
test('QRコード作成OK', () => {
  expect(qrCode.createQrCcode('アイウエオ', '名前', destinationfolder))
})

test('QRコード作成NG:ファイル名が空', () => {
  expect(() => qrCode.createQrCcode(null, '名前', destinationfolder)).toThrow()
})

test('QRコード作成NG:名称名が空', () => {
  expect(() => qrCode.createQrCcode('アイウエオ', null, destinationfolder)).toThrow()
})

test('QRコード作成NG:保存フォルダが空', () => {
  expect(() => qrCode.createQrCcode('アイウエオ', '名前', null)).toThrow()
})

test('QRコード作成NG:引数全てが空', () => {
  expect(() => qrCode.createQrCcode(null, null, null)).toThrow()
})

fsmkdir.rmdirSync(destinationfolder)
