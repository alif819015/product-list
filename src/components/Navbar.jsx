import React from "react";
import styled from "styled-components";

const Navbar = () => (
  <NavbarContainer>
    <NavLogo href="/">Product List</NavLogo>
    <NavMenu>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </NavMenu>
  </NavbarContainer>
);

export default Navbar;

const NavbarContainer = styled.nav`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavLogo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  @media only screen and (max-width: 320px) {
      font-size: 1rem;
      color: rgba(94, 184, 142, 0.925);
      font-weight: 800;
  }
  @media only screen and (min-width: 360px) {
    font-size: 1rem;
      color: rgba(94, 184, 142, 0.925);
      font-weight: 800;
  }

  @media only screen and (min-width: 411px) {
    font-size: 1rem;
      color: rgba(94, 184, 142, 0.925);
      font-weight: 800;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
      color: rgba(94, 184, 142, 0.925);
      font-weight: 800;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
      color: wheat;
      font-weight: 800;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 1.75rem;
      color: wheat;
      font-weight: 800;
  }
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s;

  &:hover {
    color: #66a5ad;
  }
`;
