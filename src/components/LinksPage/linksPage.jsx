import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./links.css";
const links = [
  { value: "/", content: "Home", id: "1", active: true },
  { value: "/cities", content: "Cities", id: "2", active: false },
];
export default function LinksPage() {
  return (
    <>
      {links.map((link) => (
        <Nav.Link
          as={NavLink}
          className="link-color"
          key={link.id}
          to={link.value}
        >
          {link.content}
        </Nav.Link>
      ))}
    </>
  );
}