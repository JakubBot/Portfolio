import React from "react";
import LinkComponent from "../../common/LinkComponent";
import "./index.scss";

const NavBar = () => {
  return (
    <>
      <div className="navbar__container">
        <div className="navbar__container__name">JB</div>
        <ul className="navbar__container__links">
          <li className="navbar__container__links__link">
            <LinkComponent
              href="/"
              className="navbar__container__links__link__item page_transition_link"
            >
              Home
            </LinkComponent>
          </li>
          <li className="navbar__container__links__link">
            <LinkComponent
              href="/blog"
              className="navbar__container__links__link__item page_transition_link"
            >
              Blog
            </LinkComponent>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
