import React from "react";
import {useRef} from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import {properties} from "../../configuration/config";
import {
    contactInput, contactInputTemplate, contactDatas, emailSentError, emailSentSuccessFully,
} from "./feed";

const Contact = () => {
    const form = useRef();
    const sendEmail = async (event) => {

        event.preventDefault();
        const sendEmail = await emailjs.sendForm(properties.api.emailjs.serviceId, properties.api.emailjs.templateId, form.current, properties.api.emailjs.userId);

        sendEmail.status === 200 ? emailSentSuccessFully() : emailSentError();

        event.target.reset();
    };

    return (<section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                {contactDatas.map(({link, icon, h4, h5}) => {
                    return (<article className="contact_option">
                        {icon}
                        <h4>{h4}</h4>
                        <h5>{h5}</h5>
                        <a href={link} target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>);
                })}
            </div>

            <form ref={form} onSubmit={sendEmail}>
                {contactInput.map(({type, name, placeholder}) => {
                    return contactInputTemplate(type, name, placeholder);
                })}
                <textarea
                    autoComplete={properties.text.false}
                    name={properties.text.message}
                    rows={properties.text.rows}
                    placeholder={properties.text.placeholderMessage}
                    required
                ></textarea>
                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>

        </div>
        <div className="email-status" hidden></div>
    </section>);
};

export default Contact;
