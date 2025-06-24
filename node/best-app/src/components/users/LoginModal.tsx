import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState, useRef, type ChangeEvent } from "react";
import type { AuthUser } from "../../stores/authStore";
import { useAuthStore } from "../../stores/authStore";

interface LoginModalProps {
  show: boolean;
  setShowLogin: (show: boolean) => void;
}

export default function LoginModal({ show, setShowLogin }: LoginModalProps) {
  const [loginUser, setLoginUser] = useState<{ email: string; passwd: string }>(
    {
      email: "",
      passwd: "",
    }
  );
  const loginAuthUser = useAuthStore((state) => state.loginAuthUser);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwdRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Modal show={show} onHide={() => setShowLogin(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="p-4 mx-auto" xs={10} sm={10} md={8}>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="ID (email)"
                  onChange={handleChange}
                  value={loginUser.email}
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="passwd"
                  placeholder="Password"
                  onChange={handleChange}
                  value={loginUser.passwd}
                  ref={passwdRef}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="outline-success">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
