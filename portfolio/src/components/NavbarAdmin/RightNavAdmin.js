import React from 'react';
import { Link } from 'react-router-dom';
import app from "../../config/fire";
import styled from 'styled-components';


const close = () => {
    app.auth().signOut();
};


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: white;
  font-weight: bolder;
  text-decoration: none;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F3C00A;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      font-weight: bolder;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/education">EDUCATION</Link></li>
      <li><Link to="/skills&resume&projects">SKILLS&RESUME</Link></li>
      <li><Link to="/admin_blogs">BLOG</Link></li>
      <li><Link to="/control">CONTROL</Link></li>
      <li><Link to="/create_blog">CREATE BLOG</Link></li>
      <li><Link to="/" onClick={close}>LOGOUT</Link></li>
    </Ul>
  )
}

export default RightNav;
