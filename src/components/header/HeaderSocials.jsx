import React from "react";
import { socialMedias } from "./feed";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      {socialMedias.map(({ link, icon }) => {
        return (
          <a href={link} target="_blank" rel="noreferrer">
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default HeaderSocials;
