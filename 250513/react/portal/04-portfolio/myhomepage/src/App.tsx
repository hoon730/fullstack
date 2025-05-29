import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.scss";
import About from "./page/About";
import Contact from "./page/Contact";
import Portfolio from "./page/Portfolio";
import Skill from "./page/Skill";
import Layout from "./components/Layout";
import Main from "./page/Main";
import TodoList from "./page/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
