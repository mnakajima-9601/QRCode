//　存在チェックし、存在する場合はtrue、それ以外はfalseを返します
exports.checkExsit = (data: String) => {
  const fs = require('fs')
  if (fs.existsSync(data)) {
    return true
  } else {
    return false
  }
}
