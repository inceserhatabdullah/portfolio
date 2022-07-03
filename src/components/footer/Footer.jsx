import React from "react";
import "./footer.css";
import { properties, toUpperCaseFirstCase } from "../../configuration/config";
import { socialMedias } from "../header/feed";
import { navFooterDatas } from "./feed";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        {navFooterDatas.map(({ link, title }) => {
          return (
            <li>
              <a data-id={link} href={link} rel="noreferrer">
                {toUpperCaseFirstCase(title)}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="footer_socials">
        {socialMedias.map(({ link, icon }) => {
          return (
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          );
        })}
      </div>

      <div className="footer_copyright">
        <small>
          Copyright &copy; {new Date().getFullYear()} {properties.projectAuthor}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
