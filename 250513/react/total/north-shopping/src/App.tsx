import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Man from "./pages/Man";
import Electric from "./pages/Electric";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Jewelery from "./pages/Jewelery";
import Singup from "./pages/Signup";
import Woman from "./pages/Woman";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Singup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
