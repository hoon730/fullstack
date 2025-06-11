import React, { useState } from "react";
import Title from "../components/Title";
import { useCartStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { memberUser } = useCartStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    userId: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: form.email,
      username: form.userId,
      password: form.userPassword,
      name: {
        firstName: form.firstName,
        lastName: form.lastName,
      },
      phone: form.phone,
    };
    memberUser(user, navigate);
  };

  return (
    <div className="container">
      <div className="content-inner">
        <Title title="회원가입" />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                required
                value={form.email}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="userId"
                placeholder="아이디를 입력하세요"
                required
                value={form.userId}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                name="userPassword"
                placeholder="비밀번호를 입력하세요"
                required
                value={form.userPassword}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="firstName"
                placeholder="이름(성)"
                required
                value={form.firstName}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="lastName"
                placeholder="이름(이름)"
                required
                value={form.lastName}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="phone"
                placeholder="전화번호를 입력하세요"
                required
                value={form.phone}
                onChange={handleChange}
              />
            </p>
            <p className="btn">
              <button className="black-btn" type="submit">
                회원가입
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
