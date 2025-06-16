// module.exports = 객체 1개
const area = {
  square: function (len) {
    //정사각형 면적적
    return len * len; //정사각형형
  },
  circle: function (radius) {
    return Math.PI * radius * radius; // 원의 면적
  },
  triangle: function (w, h) {
    return (w * h) / 2; // 직삼각형형
  },
};

module.exports = area;
