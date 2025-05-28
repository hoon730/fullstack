import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import "./App.css";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Skill } from "./page/Skill";
import { Login } from "./page/Login";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
