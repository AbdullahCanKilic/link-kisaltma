import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  NavbarText,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const links = [
  { href: "#home", text: "Home" },
  { href: "#card", text: "Product" },
  { href: "#about", text: "About" },
  { href: "#cata", text: "Categories" },
  { href: "#test", text: "Blogs" },
  { href: "#test2", text: "News" },
  { href: "#busns", text: "Adds", className: "btnadd" },
  { href: "/login", text: "LOGIN" },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

const nav = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            {links.map(createNavItem)}
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default nav;
