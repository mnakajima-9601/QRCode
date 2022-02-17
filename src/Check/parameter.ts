//　パラメーターチェックをし、なければエラーを返します
exports.checkParameter = (parameter: String, name: String) => {
  try {
    // パラメータチェック
    if (parameter == null) {
      throw new Error()
    }
    return parameter
  } catch (Error) {
    throw `${name}がありません`
  }
}
