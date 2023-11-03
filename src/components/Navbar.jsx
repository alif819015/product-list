import React from "react";
import styled from "styled-components";

const Navbar = () => (
  <NavbarContainer>
    <NavLogo href="/">
      <Image src="../../public/product.png"></Image>
      <title>Product List</title>
    </NavLogo>
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
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  title {
    @media only screen and (max-width: 320px) {
      display: none;
    }
    @media only screen and (min-width: 360px) {
      display: none;
    }

    @media only screen and (min-width: 411px) {
      display: none;
    }

    @media only screen and (min-width: 768px) {
      display: none;
    }

    @media only screen and (min-width: 1024px) {
      display: inline;
    }

    @media only screen and (min-width: 1280px) {
      display: inline;
    }
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

const Image = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;
