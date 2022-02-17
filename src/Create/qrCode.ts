//　QRコード画像を作成します
exports.createQrCcode = (text: String, name: String, destination: String) => {
  const QRCode = require('qrcode')
  const options = {
    errorCorrectionLevel: 'M',
    version: '4',
    scale: '4',
    maskPattern: '101',
    mode: 'byte',
  }
  try {
    if (text == null || name == null || destination == null) {
      throw Error
    }
    // QRコード画像
    QRCode.toFile(`${destination}/${name}.png`, text, options)
  } catch (Error) {
    throw 'QRコードを作成できませんでした'
  }
}
