// UUIDを作成します
exports.randomUuid = () => {
  const uuid = require('node-uuid')
  try {
    const id = uuid.v4()
    console.log(id)
    return id
  } catch (Error) {
    throw 'UUID作成に失敗しました'
  }
}
