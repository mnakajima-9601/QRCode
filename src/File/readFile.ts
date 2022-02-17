// ファイルを読み込み返します
exports.outputText = (file: String) => {
  const fs = require('fs')
  try {
    const text = fs.readFileSync(file, 'utf8')
    return text
  } catch (Error) {
    throw 'ファイルの読み込みに失敗しました'
  }
}
