import React from "react";
import LinkComponent from "../../common/LinkComponent";
import "./index.scss";

const NavBar = ({ category, timeRead }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <LinkComponent href="/">JB</LinkComponent>
      </div>
      <div className="navbar__category">
        <span className="navbar__category-label">{category}</span>
        <span className="navbar__category-read">
          &#8226; {timeRead} min read
        </span>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <LinkComponent href="/" className="navbar__link">
            Home
          </LinkComponent>
        </li>
        <li className="navbar__item">
          <LinkComponent href="/blog" className="navbar__link">
            Blog
          </LinkComponent>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
