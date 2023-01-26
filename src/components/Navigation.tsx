import { FunctionComponent } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectHomepage } from "../features/reducers/homepageSlice";

interface NavigationProps {}

const RenderPagesForNavigation = ({ currentHomepage }: any) => {
  return <></>;
};

const Navigation: FunctionComponent<NavigationProps> = () => {
  const { homepage }: any = useSelector(selectHomepage);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">To {homepage.id}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {homepage?.children.map((page: any, index: number) => (
              <Nav.Link href={page.title}>{page.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
