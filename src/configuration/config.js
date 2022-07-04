import {BiHomeHeart, BiMessageSquareDetail} from "react-icons/bi";
import {AiOutlineUser, AiOutlineFundProjectionScreen} from "react-icons/ai";
import {FaGithub, FaInstagram} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import {SiNpm} from "react-icons/si";
import {MdEmail} from "react-icons/md";
import {FiAward} from "react-icons/fi";

// Environment variables
const {
    REACT_APP_LINKEDIN_URL,
    REACT_APP_INSTAGRAM_URL,
    REACT_APP_GITHUB_URL,
    REACT_APP_NPM_URL,
    REACT_APP_PROJECTS_COUNT,
    REACT_APP_PROJECT_LOGGING_URL,
    REACT_APP_PROJECT_PORTFOLIO_URL,
    REACT_APP_PROJECT_MONGODB_CRUD_URL,
    REACT_APP_PROJECT_GENERATE_PASSWORD_URL,
    REACT_APP_PROJECT_OPEN_WEATHER_URL,
    REACT_APP_AUTHOR,
    REACT_APP_EXPERIENCE_YEAR,
    REACT_APP_EMAILJS_USER_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_GMAIL_ACCOUNT,
} = process.env;

const properties = {
    chars: {
        hashtag: "#",
        empty: "",
        percent: "%",
    },
    text: {
        email: "Email",
        linkedin: "Linkedin",
        instagram: "Instagram",
        instagramAccountName: "_serhatince",
        sendMessage: "Send a message",
        experiences: {
            backend: {
                node: "Node.js",
                microservice: "Microservice",
                docker: "Docker",
                k8s: "K8s",
                jenkins: "Jenkins",
            },
            frontend: {
                html: "HTML",
                css: "CSS",
                javascript: "Javascript",
                react: "React.js",
            },
        },
        text: "text",
        subject: "subject",
        name: "name",
        placeholderFullName: "Your Full Name",
        placeholderEmail: "Your Email",
        false: "false",
        message: "message",
        rows: "7",
        placeholderMessage: "Your Message",
        starsActiveColor: "#ffd700",
        active: "active",
        messageSentSuccessfully: "Message sent successfully. Thank you!",
        messageSentError: "There was an error and the message could not be sent. Sorry!"
    },
    projects: {
        logging: "logging.js",
        mongodbCrud: "mongodb-crud.js",
        generatePassword: "generate-password.js",
        openWeather: "open-weather.js",
        portfolio: "portfolio",
    },
    menus: {
        home: "home",
        experience: "experience",
        about: "about",
        projects: "projects",
        contact: "contact",
    },
    icons: {
        home: <BiHomeHeart/>,
        about: <AiOutlineUser/>,
        experience: <FiAward/>,
        projects: <AiOutlineFundProjectionScreen/>,
        contact: <BiMessageSquareDetail/>,
        github: <FaGithub/>,
        linkedin: <BsLinkedin/>,
        instagram: <FaInstagram/>,
        npm: <SiNpm/>,
        email: <MdEmail/>,

    },
    api: {
        emailjs: {
            serviceId: REACT_APP_EMAILJS_SERVICE_ID,
            templateId: REACT_APP_EMAILJS_TEMPLATE_ID,
            userId: REACT_APP_EMAILJS_USER_ID,
        },
    },
    urls: {
        linkedin: REACT_APP_LINKEDIN_URL,
        instagram: REACT_APP_INSTAGRAM_URL,
        gmail: REACT_APP_GMAIL_ACCOUNT,
        github: REACT_APP_GITHUB_URL,
        npm: REACT_APP_NPM_URL,
        projects: {
            logging: REACT_APP_PROJECT_LOGGING_URL,
            portfolio: REACT_APP_PROJECT_PORTFOLIO_URL,
            mongodbCrud: REACT_APP_PROJECT_MONGODB_CRUD_URL,
            generatePassword: REACT_APP_PROJECT_GENERATE_PASSWORD_URL,
            openWeather: REACT_APP_PROJECT_OPEN_WEATHER_URL,
        },
    },
    projectAuthor: REACT_APP_AUTHOR,
    projectCount: REACT_APP_PROJECTS_COUNT,
    experienceYear: REACT_APP_EXPERIENCE_YEAR,
};

const toUpperCaseFirstCase = (title) => {
    return title.replace(/^./, title[0].toUpperCase())
}

const toLowerCaseFirstCase = (title) => {
    return title.replace(/^./, title[0].toLowerCase())
}

export {

    toUpperCaseFirstCase,
    toLowerCaseFirstCase,
    properties,
};
