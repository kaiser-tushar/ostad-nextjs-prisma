import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

export default function Layout({ title, children }) {
  return (
    <div>
      <Navbar title={title} />
      <div className="lg:hidden flex">
        {/* Two links for mobile devices only */}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "link-accent link-hover " : "link link-hover"
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive, isPending }) =>
            isActive ? "link-accent link-hover ml-2" : "link link-hover ml-2"
          }
        >
          Expenses
        </NavLink>
      </div>
      <div className="container mx-auto mt-5">{children}</div>
    </div>
  );
}
