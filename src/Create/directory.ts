//　ディレクトリを作成します
exports.createDirectory = (path: String) => {
  try {
    // 保存先を作成します
    const fs = require('fs')
    console.log('保存先のフォルダを作成します')
    fs.mkdirSync(path)
  } catch (Error) {
    throw 'フォルダを作成できませんでした'
  }
}
