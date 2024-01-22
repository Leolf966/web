import React from 'react';

function Nav() {
    return (
        <div className="nav">
            <img src="../mylogo.png" className="llogo"/>
            <ul className="navigation__list">
                <li>
                    <a href="#" className="navigation__text">Home</a>
                </li>
                <li>
                    <a href="#" className="navigation__text">Catalog</a>
                </li>
                <li>
                    <a href="#" className="navigation__text">Cart</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
