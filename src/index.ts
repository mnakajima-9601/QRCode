// パラメータチェック
const checkParameter = require("./Check/parameter");
// ディレクトリ存在チェック
const checkExist = require("./Check/exist");
// 権限チェック
const checkAccess = require("./Check/access");
// ファイル読み込みモード
const mode1 = require("./Mode/readCSV");
// 文字列モード
const mode2 = require("./Mode/readTXT");
// IDモード
const mode3 = require("./Mode/readID");
// UUIDモード(CSV)
const mode4 = require("./Mode/readUuidCsv");
//　１(ファイル読み込み)、２(文字列)、３(ID)、４(UUID付与CSV)
const mode = checkParameter.checkParameter(process.argv[2], "モード");
//　保存先
const destination = checkParameter.checkParameter(process.argv[3], "保存先");

// 保存先チェック
if (!checkExist.checkExsit(destination)) {
  // フォルダがない場合は作成する
  console.log("保存先のフォルダがありません");
  const directory = require("./Create/directory");
  directory.createDirectory(destination);
}
// 権限チェック
checkAccess.checkAccess(destination);

// 処理開始
switch (mode) {
  case "1":
    mode1.readCSV(destination);
    break;
  case "2":
    mode2.readTXT(destination);
    break;
  case "3":
    mode3.readID(destination);
    break;
  case "4":
    mode4.readUuidCsv(destination);
    break;
  default:
    throw "1(ファイル読み込み)、2(文字列)、3(ID)、4(UUID付与CSV)、5(文字列書き出し)を選択してください。";
}
