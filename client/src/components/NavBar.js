/* eslint-disable no-undef */

import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, PLATFORM_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom"
//import {useHistory} from 'react-router-dom'

const NavBar = observer(() =>{
    const{user}=useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={PLATFORM_ROUTE}>GetWork</NavLink>
     
          {user.isAuth ?
            <Nav className="ml-auto" style={{color:'white'}}>
             <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
             <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
             <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
             
            </Nav>
            }
        </Container>
      </Navbar>
    )
        
});

export default NavBar
