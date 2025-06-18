// path 모듈 : 파일의 경로 처리 기능 제공
// path.sep : OS의 파일 경로 구분자
// join() : 경로를 결합
// resolve(경로) : 주어진 경로를 절대 경로 변환
// dirname(경로) : 주어진 경로에서 파일 이름을 제외한 디렉토리 경로만 변환
// basename(경로) : 파일명 변환(확장자 포함)
// extname(경로) : 확장자 변환
const path = require("path");
const dirs = ["D:", "ezen-source", "node-basic"];
const dirStr = dirs.join(path.sep);
console.log(dirStr);
console.log(__dirname);
const curPath = path.join(__dirname, "public", "pizzaUI.html");
// 파일명 제외한 상위 경로
const upDir = path.dirname(curPath);
console.log(upDir);
const fname = path.basename(curPath);
console.log(fname); // pizzaUI.html
const ext = path.extname(curPath);
console.log(ext); //.html

const filePath = "/home/user/project/file.txt";
// 2 단계 상위 디렉토리 얻어오기
const str = path.join(filePath, "..", "..");
console.log(str); //\home\user
console.log(path.resolve(str)); // 주어진 경로를 절대 경로로 변환환
