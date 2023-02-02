import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="welcome">
      <div className="form-wrapper">
        <h2 className="text-center">Login</h2>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="my-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div>
            Don't have an account?{" "}
            <Link className="register" to={"/register"}>
              <span>Register</span>
            </Link>
          </div>

          <Link className="register" to={"/"}>
            <div>Back to Home Page</div>
          </Link>

          <button className="text-white btn-form my-3">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
