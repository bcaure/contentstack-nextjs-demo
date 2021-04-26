/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";

export const Header = ({ header }) => {
  const nav = header.link.map(item => (
    <a href={item.url} key={item.title}>
      {item.title}
    </a>
  ));
  return (
    <header>
      <a className="logo" href="/">
        <span className="logoText">
          <i className="fa fa-file-code-o" aria-hidden="true" />
          <span className="logoTitle">{header.title}</span>
        </span>
      </a>
      <nav className="navMenu">{nav}</nav>
    </header>
  );
};
