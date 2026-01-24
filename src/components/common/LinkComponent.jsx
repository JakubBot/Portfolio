import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({
  href,
  target,
  rel,
  children,
  id,
  className,
  disabled,
}) => {
  if (!href) {
    return null;
  }

  const isExternal = href.startsWith("http") || href.startsWith("https");

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        id={id}
        css={[
          className,
          disabled ? { pointerEvents: "none", opacity: 0.5 } : {},
        ]}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    );
  }

  const normalizedHref = href.startsWith("/") ? href : `/${href}`;

  return (
    <Link
      to={normalizedHref}
      id={id}
      className={`${className ?? ""} page_transition_link`} // page_transition_link handles page transitions
      css={disabled ? { pointerEvents: "none", opacity: 0.5 } : {}}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </Link>
  );
};
//

export default LinkComponent;
