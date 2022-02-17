//保存名称を作成します（「読み込みファイル名_ユーザID_行数」を名称とする）
exports.createNameMode1 = (file: String, array: Object, count: Number) => {
  const path = require('path')
  let saveName = []
  try {
    if (file == null || array == null || count == null) {
      throw Error
    }
    // ファイル名
    const fileName = path.basename(file, '.csv')
    saveName.push(fileName)
    // ユーザーID
    const userId = array[0]
    saveName.push(userId)
    // 行数
    saveName.push(Number(count) + 1)
    // 名称設定
    const returnName = saveName.join('_')
    return returnName.replace(/\s+/g, '')
  } catch (Error) {
    throw '保存名称を作成できませんでした'
  }
}
