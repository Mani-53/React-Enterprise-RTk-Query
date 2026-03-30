import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <div id="mainnav">
            <div id="navimage">
                <img src="logo.png" alt="" id="logoimage"/>
            </div>
            <div id="navul">
                <ul id="ul">
                    <li><NavLink to={"/jsontodos"} className={'navlink'}>JSONTODO</NavLink></li>
                    <li><NavLink to={"/products"} className={'navlink'}>PRODUCTS</NavLink></li>
                    <li><NavLink to={"/recipes"} className={'navlink'}>RECIPES</NavLink ></li>
                    <li><NavLink to={"/counter"} className={'navlink'}>COUNTER</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav