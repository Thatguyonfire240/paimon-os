import React from "react"

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle={{ color:'black' }}>
                        Home
                    </NavLink>
                    <NavLink to="/download" activeStyle={{ color:'black' }}>
                        Download
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ color:'black' }}>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle={{ color:'black' }}>
                        Contact
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/">Test Button</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar