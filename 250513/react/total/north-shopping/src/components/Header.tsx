import React from "react";
import { Link } from "react-router-dom";
import "./scss/header.scss";

type MenuItme = {
  key: string;
  label: string;
};

const menus: MenuItme[] = [
  { key: "man", label: "남성" },
  { key: "woman", label: "여성" },
  { key: "jewelery", label: "보석" },
  { key: "electric", label: "전자제품" },
];

const Header = () => {
  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">
              <img src="./images/logo.svg" alt="logo" />
            </Link>
          </h1>
          <nav>
            {menus.map((menu) => (
              <Link to={`/${menu.key}`} key={menu.key}>
                {menu.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to="/login">
                <img src="./images/loginPassWord.png" alt="login" />
                <p>LOGIN</p>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <img src="./images/loginMember.png" alt="signup" />
                <p>SIGNUP</p>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src="./images/cart.png" alt="cart" />
                <p>
                  CART <span className="cart-num">0</span>
                </p>
              </Link>
            </li>
          </ul>
          <div className="search-btn">
            <input type="text" placeholder="Search" />
            <p className="search-icon">
              <img src="./images/search.png" alt="search" />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
