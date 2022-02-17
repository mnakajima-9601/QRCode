// 権限チェック
exports.checkAccess = (data: String) => {
  const fs = require('fs')
  if (data == null) {
    throw '権限チェックができません'
  }
  try {
    fs.accessSync(data, fs.constants.W_OK, (error) => {
      if (error) {
        if (error.code === 'ENOENT') {
          return false
        }
      }
    })
    return true
  } catch (Error) {
    throw '権限がありません'
  }
}
