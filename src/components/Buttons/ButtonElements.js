import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"

export const Btn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const BtnLink = styled(Link)`
    border-radius: 4px;
    background: transparent;
    padding: 10px 22px;
    color: #320011;
    outline: none;
    border: 1px solid #320011;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #320011;
        color: #fff;
    }
`