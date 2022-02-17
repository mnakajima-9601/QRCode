exports.readID = (destination: String) => {
  // パラメータチェック
  const checkParameter = require('../Check/parameter')
  //　QR作成
  const createQrCode = require('../Create/qrCode')
  //　UUID作成
  const creaeteUUID = require('../Create/uuid')
  //　QRコード作成数
  const count = checkParameter.checkParameter(process.argv[4], 'QRコード作成数')
  //　イベントID
  const eventID = checkParameter.checkParameter(process.argv[5], 'イベントID')

  let text = null
  let name = null

  for (let i = 1; i <= count; i++) {
    // UUID作成
    let uuid = creaeteUUID.randomUuid()
    // 文字列作成
    text = eventID + ';' + uuid
    name = eventID + '_' + i
    // QRコード画像
    createQrCode.createQrCcode(text, name, destination)
  }
}
