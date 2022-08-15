import React from "react"
import styled from "styled-components";
import { pizzaRed } from "../Styles/color";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div `
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index:999
`

const Logo = styled(Title)`
    font-size:20px;
    color:white;
    text-shadow: 1px 1px 4px #380502;
`

export function Navbar(){
    return(
        <NavbarStyled>
            <Logo>
                SliceLine <img src="https://img.icons8.com/color/48/000000/pizza.png"/>
            </Logo>
        </NavbarStyled>
    )     
}