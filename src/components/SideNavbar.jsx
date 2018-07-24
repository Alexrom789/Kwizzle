import React from 'react';
import {
    NavLink,
  } from "react-router-dom";


const SideNavbar = (props) => (
<div className="SideNav">
    <h1>Kwizzle</h1>
    <hr></hr>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/decks">Manage Decks</NavLink></li>
            <li><NavLink to="/kwiz">Kwiz</NavLink></li>
        </ul>
</div>
);

export default SideNavbar;