import React from 'react'
import "./about.css"
import ME from './../../assets/profile.jpg'
import { aboutDatas, aboutParagraph } from './feed'
import { toUpperCaseFirstCase } from '../../configuration/config'

const About = () => {
  return (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          {
            aboutDatas.map(({icon, h5, title}) => {
              return (
                <article className="about_card">
                {icon}
                <h5>{toUpperCaseFirstCase(h5)}</h5>
                <small> {title}</small>
              </article>
              )
            })
          }
        </div>

        {aboutParagraph}

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About