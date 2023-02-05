import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="welcome">
      <div className="form-wrapper" style={{ height: "39rem" }}>
        <h2 className="text-center">Register</h2>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div>
            Already have an account?{" "}
            <Link className="register" to={"/login"}>
              <span>Login</span>
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

export default Register;
