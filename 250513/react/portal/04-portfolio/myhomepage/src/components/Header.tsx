import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // 메뉴로 사용할 오브젝트
  const menus = [
    { key: "About", label: "ABOUT" },
    { key: "Skill", label: "SKILL" },
    { key: "Portfolio", label: "PORTFOLIO" },
    { key: "TodoList", label: "TODOLIST" },
    { key: "Contact", label: "CONTACT" },
  ];
  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">LOGO</Link>
          </h1>
          <nav>
            <ul>
              {menus.map((menu, idx) => {
                return (
                  <li key={idx}>
                    <Link to={`/${menu.key}`}>{menu.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="header-right"></div>
      </div>
    </header>
  );
};

export default Header;
