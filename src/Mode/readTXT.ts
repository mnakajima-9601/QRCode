exports.readTXT = (destination: String) => {
  // パラメータチェック
  const checkParameter = require('../Check/parameter')
  //　QR作成
  const createQrCode = require('../Create/qrCode')
  //　文字列
  const text = checkParameter.checkParameter(process.argv[4], '文字列')
  // QRコード画像
  createQrCode.createQrCcode(text, text, destination)
}
