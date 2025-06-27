require("dotenv").config();
module.exports = {
  development: { // 개발 환경
    username: "ezen",
    password: "1234",
    database: "edudb",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "ezen1234",
    database: "edudb",
    host: "localhost",
    dialect: "mysql",
  },
};
