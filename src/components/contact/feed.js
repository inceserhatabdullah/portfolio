import {
    properties,
    toLowerCaseFirstCase,
    toUpperCaseFirstCase,
} from "../../configuration/config";

const getEmailStatus = document.getElementsByClassName("email-status");

const contactInput = [
    {
        type: properties.text.text,
        name: properties.text.name,
        placeholder: properties.text.placeholderFullName,
    },
    {
        type: toLowerCaseFirstCase(properties.text.email),
        name: toLowerCaseFirstCase(properties.text.email),
        placeholder: properties.text.placeholderEmail,
    },
    {
        type: properties.text.text,
        name: properties.text.subject,
        placeholder: toUpperCaseFirstCase(properties.text.subject),
    },
];

const contactDatas = [
    {
        link: properties.urls.gmail,
        icon: properties.icons.email,
        h4: properties.text.email,
        h5: properties.urls.gmail.slice(7, 25),
    },
    {
        link: properties.urls.linkedin,
        icon: properties.icons.linkedin,
        h4: properties.text.linkedin,
        h5: properties.projectAuthor,
    },
    {
        link: properties.urls.instagram,
        icon: properties.icons.instagram,
        h4: properties.text.instagram,
        h5: properties.text.instagramAccountName,
    },
];

const contactInputTemplate = (type, name, placeholder) => {
    return (
        <input
            autoComplete={properties.text.false}
            type={type}
            name={name}
            placeholder={placeholder}
            required
        />
    );
};

const emailSentSuccessFully = () => {
    getEmailStatus[0].style.display = "block";
    getEmailStatus[0].style.backgroundColor = "#0EA038";
    getEmailStatus[0].textContent = properties.text.messageSentSuccessfully;
    emailDivVisibleHidden();
};

const emailSentError = () => {
    getEmailStatus[0].style.backgroundColor = "#EA0F0F";
    getEmailStatus[0].style.display = "block";
    getEmailStatus[0].textContent = properties.text.messageSentError;
    emailDivVisibleHidden();
};

const emailDivVisibleHidden = () => {
    setTimeout(() => {
        getEmailStatus[0].style.display = "none";
    }, 3500);
};
export {
    contactDatas,
    contactInput,
    contactInputTemplate,
    emailSentSuccessFully,
    emailSentError,
};
