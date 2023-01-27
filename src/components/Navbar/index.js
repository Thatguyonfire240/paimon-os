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
                  <img src="https://play-lh.googleusercontent.com/vRd2gg6XmC3TRTM5wZZ8qwEc5LMUROh4whycLuiCSPB40tIxDYLT6V0BdCn486XiKQ0=s48" />
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle={{ color:'black' }}>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ color:'black' }}>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle={{ color:'black' }}>
                        Contact
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/download">Download</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar