exports.readUuidCsv = (destination: String) => {
  // パラメータチェック
  const checkParameter = require('../Check/parameter')
  // ディレクトリ存在チェック
  const checkExist = require('../Check/exist')
  //　ファイル読み込み
  const readFile = require('../File/readFile')
  //　配列を作成
  const toArray = require('../Create/texttoArray')
  //　QR作成
  const createQrCode = require('../Create/qrCode')
  //　UUID作成
  const creaeteUUID = require('../Create/uuid')
  //　保存名作成
  const saveName = require('../Create/saveName')
  //　CSVファイル
  const csv = checkParameter.checkParameter(process.argv[4], '読み込みファイルパス')

  // ファイル存在チェック
  if (!checkExist.checkExsit(csv)) {
    throw '読み込みファイルが存在しません'
  }
  // ファイルを読み込む
  const file = readFile.outputText(csv)
  // 配列に変換する
  const array = toArray.outputArray(file)
  // 配列を一行ずつ回して処理する
  for (var idx in array) {
    // UUID作成
    let uuid = creaeteUUID.randomUuid()
    // 文字列作成
    let text = array[idx][1] + ';' + uuid
    // QRコード画像
    createQrCode.createQrCcode(text, array[idx][0].replace(/\s+/g, ''), destination)
  }
}
