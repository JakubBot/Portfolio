import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ href, target, rel, children, id, className }) => {
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
        className={className}
      >
        {children}
      </a>
    );
  }

  const normalizedHref = href.startsWith("/") ? href : `/${href}`;

  return <Link to={normalizedHref} id={id} className={className}>{children}</Link>;
};

export default LinkComponent;
