import React from "react";
import CV from "./../../assets/aboutMe.pdf";
import { properties } from "./../../configuration/config";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a
        href={`${properties.chars.hashtag}${properties.menus.contact}`}
        className="btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
