import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "./../../assets/profile.webp";
import HeaderSocials from "./HeaderSocials";
import { properties } from "../../configuration/config";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>{properties.projectAuthor}</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a
          href={`${properties.chars.hashtag}${properties.menus.contact}`}
          className="scroll_down"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
