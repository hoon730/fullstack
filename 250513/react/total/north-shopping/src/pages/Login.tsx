import React, { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useStore";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useCartStore();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: form.email,
      password: form.password,
    };
    login(user, navigate);
  };

  return (
    <div className="container">
      <Title title="로그인" />
      <form className="form" onSubmit={handleSubmit}>
        <p>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            onChange={handleChange}
          />
        </p>
        <p className="black-btn">
          <button type="submit">로그인</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
