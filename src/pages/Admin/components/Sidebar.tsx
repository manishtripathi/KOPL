import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Admin Panel</h2>
            <nav>
                <ul>
                    <li><NavLink to={"create-category"}>Create Category</NavLink></li>
                    <li><NavLink to={"createblogs"}>Create Blog</NavLink></li>
                    <li><NavLink to={"createnews"}>Create News</NavLink></li>
                    <li><NavLink to={"create-product"}>Create Products</NavLink></li>
                    <li><NavLink to={"create-career"}>Create Career</NavLink></li>
                    <li><NavLink to={""}>View Pages</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
