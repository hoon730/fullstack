const url = require("url");
// url주소를 파싱하여 조작할 수 있게하는 모듈
const str =
  "https://smartstore.naver.com/negonego22/products/8450702827?site_preference=device&NaPm=ct%3Dmbztvjsf%7Cci%3Dshopn%7Ctr%3Dnshfd%7Chk%3D96690c06659aba605ffddc98549b0298c75b7914%7Ctrx%3Dundefined";
const str2 =
  "https://brand.naver.com/fruitggun/products/4982662920?site_preference=device&NaPm=ct%3Dmbztwoey%7Cci%3Dshopn%7Ctr%3Dnshfd%7Chk%3Db1a7ab33195847839bc03b35e4f57747daa8a63c%7Ctrx%3Dundefined";

// 1. url.parse(url주소) : url주소를 분해해서 내가 원하는 정보를 추출할 수 있다.
// 2. url.format(객체) : 분해된 url객체를 다시 원 상태로 조립한 문자열 반환

const parseUrl = url.parse(str);
console.log(parseUrl);
console.log(parseUrl.query); // id=5002039527
console.log(parseUrl.pathname);

console.log("url.format(): ", url.format(parseUrl));

// 최근 WHATWG URL 표준을 따르는 새로운 URL API를 사용
const myUrl = new URL(str2);
// 쿼리 읽기
console.log("******************");
console.log(myUrl);
console.log(myUrl.searchParams.get("query"));
console.log(myUrl.searchParams.get("id"));
console.log(myUrl.hash);

// 쿼리 수정
myUrl.searchParams.set("id", "300");
console.log(myUrl.href);

// 쿼리 추가
myUrl.searchParams.append("sort", "price");
console.log(myUrl.hash);

// 쿼리 삭제
myUrl.searchParams.delete("query");
console.log(myUrl);
