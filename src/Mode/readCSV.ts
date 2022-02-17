exports.readCSV = (destination: String) => {
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
    // 保存名称を設定する
    const name = saveName.createNameMode1(csv, array[idx], idx)
    // QRコード画像
    createQrCode.createQrCcode(array[idx][1], name, destination)
  }
}
