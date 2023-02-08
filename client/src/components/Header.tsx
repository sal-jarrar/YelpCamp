import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const {
    state: { user },
    logout,
  } = useContext(UserContext);
  return (
    <header>
      <Navbar variant="dark" expand="lg" collapseOnSelect>
        <Container style={{ maxWidth: "60vw" }} className="d-flex">
          <div className="flex-md-grow-1">
            <Navbar.Brand href="/">YelpCamp</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                {user ? (
                  <>
                    <Nav.Link href="/" onClick={() => logout()}>
                      Logout
                    </Nav.Link>
                    <Navbar.Text>
                      Signed in as: <a href="#login">{user.name}</a>
                    </Navbar.Text>
                  </>
                ) : (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
