import { properties } from "../../configuration/config";

/* Navigation Section*/
const navFooterDatas = [
    {
      link: `${properties.chars.hashtag}`,
      icon: properties.icons.home,
      title: properties.menus.home,
    },
    {
      link: `${properties.chars.hashtag}${properties.menus.about}`,
      icon: properties.icons.about,
      title: properties.menus.about,
    },
    {
      link: `${properties.chars.hashtag}${properties.menus.experience}`,
      icon: properties.icons.experience,
      title: properties.menus.experience,
    },
    {
      link: `${properties.chars.hashtag}${properties.menus.projects}`,
      icon: properties.icons.projects,
      title: properties.menus.projects,
    },
    {
      link: `${properties.chars.hashtag}${properties.menus.contact}`,
      icon: properties.icons.contact,
      title: properties.menus.contact,
    },
  ];

export {navFooterDatas};