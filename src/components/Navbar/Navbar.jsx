import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Logo from '../Logo/Logo';

// Active link style function
const getLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#2563eb" : "", // Blue color when active
      borderBottom: isActive ? "2px solid #2563eb" : "none", // Underline when active
      paddingBottom: "2px",
      backgroundColor: isActive ? "#CAEB66" : "transparent",
    };
};

const Navbar = () => {


    const links = (
      <>
        <li>
          <NavLink className="font-bold" to="/" style={getLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="font-bold" to="/profile" style={getLinkStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="font-bold" to="/coverage" style={getLinkStyle}>
            Coverage
          </NavLink>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm rounded-3xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >{links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl"><Logo></Logo></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;