import "./experience.css";
import { backendExperiences, frontendExperiences, defaultExperienceTemplate } from "./feed";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {/* Return Backend Experience Datas */}

            {backendExperiences.map(({ h4, stars }) => {
              return defaultExperienceTemplate(h4, stars);
            })}
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {/* Return Frontend Experience Datas */}

            {frontendExperiences.map(({ h4, stars }) => {
              return defaultExperienceTemplate(h4, stars);
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
