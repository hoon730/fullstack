import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Dark({ isDark, toggle }) {
    const {isDark, toggle} = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <h2>배경테마 변경</h2>
      <button onClick={toggle}>테마변경</button>
    </div>
  );
}
