import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 97%;
  height: 55px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;
