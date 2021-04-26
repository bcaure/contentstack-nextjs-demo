/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from "react";

export const Footer = ({ footer }) => {
  const footerNav = footer.nav_links.map((item, index) => (
    <a href={item.href} key={index}>
      {item.title}
    </a>
  ));

  const socialShare = (
    <li>
      <a href={footer.social_share.href}>
        <i className={`fa-${footer.social_share.title.toLowerCase()}`} />
      </a>
    </li>
  );

  return (
    <footer>
      <div className="links">{footerNav}</div>
      <div className="s-share">
        <ul>{socialShare}</ul>
      </div>
      <div className="copywrite">
        <div dangerouslySetInnerHTML={{ __html: footer.copywrite }} />
      </div>
    </footer>
  );
};
