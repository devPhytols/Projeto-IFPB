import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Logo from "../../imagens/logo.svg";
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(24, 24, 24);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    z-index: 10;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>aaaa</li>
      <li>
        <NavLink to='/'>
        Artigos
        </NavLink>
      </li>
      <li>
        <NavLink to='/tutoriais'>
        Tutoriais
        </NavLink>
      </li>
      <li>
        <NavLink to='/sobre'>
        Sobre
        </NavLink>
      </li>
      <Nav>
        <NavLink to='/'>
            <img src={Logo} alt='logo' />
        </NavLink>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Artigos
          </NavLink>
          <NavLink to='/tutoriais' activeStyle>
            Tutoriais
          </NavLink>
          <NavLink to='/sobre' activeStyle>
            Sobre
          </NavLink>
          {/* <NavBtnLink to='/'>b2</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/formulario'>Avaliar Projeto</NavBtnLink>
        </NavBtn>
      </Nav>
    </Ul>
  )
}

export default RightNav