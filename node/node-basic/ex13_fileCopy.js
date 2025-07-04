// ex13_fileCopy.js

const fs = require("fs");
const zlib = require("zlib");

const copy = function (src, dest) {
  const rs = fs.createReadStream(src); // 원본 파일명 => 읽는 스트림 연결
  const ws = fs.createWriteStream(dest); // 목적 파일명 => 쓰는 스트림 연결
  rs.pipe(ws);
  console.log(">>파일 카피 중..<<");

  // readStream.pipe(wrtieStream)
  // 읽는 스트림과 쓰는 스트림을 연결해서 데이터를 전달하는 기능 수행
};
console.log("복사 시작 ********");
// copy("ex03_process.js", "copy.txt");
copy("sample.png", "copy.png");
console.log("복사 완료 ********");

fs.createReadStream("sample.png")
  .pipe(zlib.createGzip()) // gzip 압축
  .pipe(fs.createWriteStream("yourimg.gz"))
  .on("finish", () => {
    console.log("파일 압축 완료!");
  });
