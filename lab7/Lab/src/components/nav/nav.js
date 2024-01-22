import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <img src="../mylogo.png" className="llogo"/>
            <ul className="navigation__list">
                <li>
                    <NavLink exact to="/" activeClassName="active" className="navigation__text">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/Catalog" activeClassName="active" className="navigation__text">
                        Catalog
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/Cart" activeClassName="active" className="navigation__text">
                        Cart
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Nav;