
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/home" tag={Link} id="navbar-brand">
            Home
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Derek and Abdullah
          </UncontrolledTooltip>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                About
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/about-derek">
                  Derek
                </DropdownItem>
                <DropdownItem href="/about-website">
                  Website
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="danger"
                href="/projects"
              >
                My Projects
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="danger"
                href="/accomplishments"
              >
                Accomplishments
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="danger"
                href="/contact_me"
              >
                Contact Me
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
