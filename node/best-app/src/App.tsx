import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "./components/users/Header";
import Side from "./components/users/Side";
import Footer from "./components/users/Footer";
import Home from "./pages/Home";
import PostApp from "./pages/PostApp";
import PostView from "./components/posts/PostView";
import PostEdit from "./components/posts/PostEdit";
import SignUpForm from "./components/users/SignUpForm";

function App() {
  return (
    <>
      <div className="container fluid py-5">
        <BrowserRouter>
          <Row>
            <Col className="mb-5">
              <Header />
            </Col>
          </Row>
          <Row className="main">
            <Col
              xs={12}
              sm={4}
              md={4}
              lg={3}
              className="d-none d-sm-block mt-3"
            >
              <Side />
            </Col>
            <Col xs={12} sm={8} md={8} lg={9}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<PostApp />} />
                <Route path="/posts/:id" element={<PostView />} />
                <Route path="/postEdit/:id" element={<PostEdit />} />
                <Route path="/signup" element={<SignUpForm />} />
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col lg={12}></Col>
          </Row>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
