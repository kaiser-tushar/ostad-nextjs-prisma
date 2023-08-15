import Link from "next/link";
import React from "react";
import Styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <div>
        <Link className={Styles.logo} href="/">
          Next 13 Blog
        </Link>{" "}
      </div>
      <ul className={Styles.navLinks}>
        <li>
          <Link className={Styles.navLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={Styles.navLink} href="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
