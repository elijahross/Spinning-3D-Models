import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <AnchorLink href="#hero" offset="200">
            Phosphate
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" offset="200">
            Deoxyribose
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects" offset="200">
            Nitrogenous
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" offset="200">
            Summary
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
