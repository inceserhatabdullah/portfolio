import React from "react";
import "./projects.css";
import GTHB_ICN from "./../../assets/github.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { projectDatas } from "./feed";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Review my projects</h5>
      <h2>Projects</h2>
      <Swiper
        className="container projects_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {projectDatas.map(({ id, name, link, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={GTHB_ICN} alt="" />
              </div>
              <a
                href={link}
                className="github_page"
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
