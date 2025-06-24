const pool = require("../models/dbPool");
const bcrypt = require("bcrypt");

// 회원가입 처리 메서드
exports.createUser = async (req, res) => {
  const { name, email, passwd, role } = req.body;
  if (!name || !email || !passwd) {
    return res.status(400).json({
      result: "fail",
      message: "이름, 이메일, 비밀번호 모두 입력해야 해요.",
    });
  }
  const sql = "insert into members(name, email, passwd, role) values(?,?,?,?)";

  try {
    // 비밀번호 암호화 => bcrypt 모듈 npm i bcrypt
    // passwd: 111 (평문) ==> 해싱(111 + salt)
    const salt = 10; // 2^10 (1024)만큼 반복된 해싱값을 생성하기 위해
    const hashPasswd = await bcrypt.hash(passwd, salt);
    console.log("hashPasswd", hashPasswd);
    // 로그인 시에는 bcrypt.compare(passwd, dbPasswd) 이용해서 비교
    const [result] = await pool.query(sql, [name, email, hashPasswd, role]);
    if (result.affectedRows > 0) {
      res.json({
        result: "success",
        message: "회원가입 완료-로그인하세요.",
        data: { insertId: result.insertId },
      });
    } else {
      res.json({ result: "fail", message: "회원정보 등록 실패" });
    }
    // 데이터베이스 처리
  } catch (error) {
    console.error("error", error);
    res
      .status(500)
      .json({ result: "fail", message: "DB SQL 에러" + error.message });
  }
};

// 이메일 중복 체크
exports.duplicatedEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res
      .status(400)
      .json({ result: "fail", message: "이메일을 입력하세요." });
  }
  try {
    const sql = "select id from members where email =?";
    const [result] = await pool.query(sql, [email]);
    console.log("result: ", result);
    // 해당 email이 없다면 빈 배열[] 을 반환, 있다면 [${id: 10}]
    if (result.length === 0) {
      return res.json({ result: "ok", message: `${email}은 사용가능한 이메일입니다.` });
    }
    return res.json({
      result: "duplex",
      message: `${email}은 이미 사용중인 이메일입니다.`,
    });
  } catch (error) {
    console.error("error", error);
    res
      .status(500)
      .json({ result: "fail", message: "DB SQL 에러" + error.message });
  }
};
