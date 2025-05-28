import { useState, useContext } from "react";
import { AuthContext, useAuth } from "../context/AuthContext";

export const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login, logout } = useAuth();

  // admin 1234

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId === "admin" && password === "1234") {
      alert("로그인 성공");
    } else {
      alert("아이디 또는 비밀번호가 틀립니다.");
    }
  };

  return (
    <section>
      <div className="inner">
        <h2>로그인</h2>
        {isLoggedIn ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
            <button>로그인</button>
          </form>
        )}
      </div>
    </section>
  );
};
