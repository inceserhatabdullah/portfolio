import { properties } from "../../configuration/config";

const projectDatas = [
  {
    id: 1,
    name: properties.projects.logging,
    link: properties.urls.projects.logging,
    review:
      "A simple API that you can log on the terminal or in a file with the file path you provide.",
  },
  {
    id: 2,
    name: properties.projects.mongodbCrud,
    link: properties.urls.projects.mongodbCrud,
    review:
      "A package that can perform CRUD operations using the npm mongodb package.",
  },
  {
    id: 3,
    name: properties.projects.generatePassword,
    link: properties.urls.projects.generatePassword,
    review:
      "A package that can perform random password generation process according to the desired features.",
  },
  {
    id: 4,
    name: properties.projects.openWeather,
    link: properties.urls.projects.openWeather,
    review:
      "An application that provides instant information about your city's weather using the open-weather API.",
  },
  {
    id: 5,
    name: properties.projects.portfolio,
    link: properties.urls.projects.portfolio,
    review: "A portfolio theme introducing myself.",
  },
];

export { projectDatas };
