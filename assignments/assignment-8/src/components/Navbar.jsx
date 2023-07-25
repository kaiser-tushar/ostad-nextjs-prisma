import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar({ title }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">{title} Tracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "link-accent link-hover " : "link link-hover"
              }
            >
              Income
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/expenses"
              className={({ isActive, isPending }) =>
                isActive
                  ? "link-accent link-hover ml-2"
                  : "link link-hover ml-2"
              }
            >
              Expenses
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
