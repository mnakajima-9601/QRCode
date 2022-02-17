// 配列にして返します
exports.outputArray = (text: String) => {
  const fs = require('fs')
  // 配列に変換
  let array = []
  try {
    const items = text.replace(/[\"]/g, '')
    const lines = items.toString().split('\n')
    for (var idx in lines) {
      let arrayItem = []
      let item = lines[idx].toString().split(',')
      for (var i in item) {
        arrayItem.push(item[i].toString())
      }
      array.push(arrayItem)
    }
    return array
  } catch (Error) {
    throw '配列に変換できませんでした'
  }
}
