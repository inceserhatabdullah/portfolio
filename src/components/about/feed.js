import { properties, toUpperCaseFirstCase } from "../../configuration/config";

const aboutDatas = [
  {
    icon: properties.icons.experience,
    h5: properties.menus.experience,
    title: `${
      properties.experienceYear
    } years ${toUpperCaseFirstCase(properties.menus.experience)}`,
  },

  {
    icon: properties.icons.projects,
    h5: properties.menus.projects,
    title: `${properties.projectCount}+ Completed`,
  },
];

const aboutParagraph = (
  <p>
    Hello guys. <br></br> <br></br>I'm <strong> Abdullah Serhat Ince </strong>
    and 25 years old. <br></br>My hobbies include writing code, watching writers
    and seeing your success, and trying new technologies, watching video games,
    and reading different kinds of books and other than that, I try to take care
    of my health with sports and regular nutrition.
  </p>
);

export { aboutDatas, aboutParagraph };
