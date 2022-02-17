//　QRコード画像を作成します
exports.createQrCcode = (array: Object, name: String, destination: String) => {
  const fs = require("fs");
  const { createCanvas } = require("canvas");
  const canvas = createCanvas(1000, 1200);
  const ctx = canvas.getContext("2d");
  const QRCode = require("qrcode");
  const options = {
    errorCorrectionLevel: "M",
    version: "4",
    scale: "4",
    maskPattern: "101",
    mode: "byte",
  };

  try {
    if (array == null || name == null || destination == null) {
      throw Error;
    }

    // QR文字列
    const codeText = array[0];
    // 整理番号
    const referenceNumber = array[1];
    // タイトル
    const title1 = array[2];
    const title2 = array[3];
    const title3 = array[4];
    // 情報
    const information1 = array[5];
    const information2 = array[6];
    const information3 = array[7];

    QRCode.toCanvas(canvas, codeText, options, function (error) {
      // 文字を入れる
      ctx.font = "40px ＭＳ 明朝, serif";
      ctx.fillStyle = "red";
      // ここでエラー
      ctx.fillText("テストよう文字列s", 20, 80);

      fs.writeFileSync(
        destination + referenceNumber + ".png",
        canvas.toBuffer()
      );
    });
  } catch (Error) {
    throw "QRコードを作成できませんでした";
  }
};
