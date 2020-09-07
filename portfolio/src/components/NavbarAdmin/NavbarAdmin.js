import React from 'react';
import styled from 'styled-components';
import BurgerAdmin from './BurgerAdmin';

const Nav = styled.nav`
  width: 97%;
  height: 55px;
  padding: 0 20px;
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
      <BurgerAdmin />
    </Nav>
  )
}

export default Navbar;
