import React, { useState } from 'react';
import Textinput from '../common/TextInput';
import emailjs from 'emailjs-com';
import './index.scss';

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    button: 'Send',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  const isFormValid = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = {};
    let { name, email, message } = contactForm;

    if (name.length < 3) {
      errors.name = 'Too short name';
    }
    if (name.length === 0) {
      errors.name = 'Name is required';
    }

    if (email.length === 0) {
      errors.email = 'Email is required';
    } else if (!re.test(email.toLocaleLowerCase())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (message.length < 10) {
      errors.message = 'Too short message';
    }
    if (message.length === 0) {
      errors.message = 'Message is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          setContactForm((prevState) => ({
            ...prevState,
            name: '',
            email: '',
            message: '',
            button: 'Thanks',
          }));
        },
        () => {
          setContactForm((prevState) => ({
            ...prevState,
            name: '',
            email: '',
            message: '',
            button: 'Error, try later',
          }));
        }
      );
  };
  return (
    <footer className="footer" id="footer">
      <div className="footer__perspective">
        <div className="footer__perspective__line">
          <p></p>
          <p></p>
        </div>
        <div className="footer__perspective__line">
          <p>Contact</p>
          <p>Me</p>
        </div>
        <div className="footer__perspective__line">
          <p>Facebook</p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100009801185275"
              target="_blank"
              rel="noopener noreferrer"
            >
              KubaBot
            </a>
          </p>
        </div>
        <div className="footer__perspective__line small-font">
          <p>Email</p>
          <p>
            <a
              href="https://www.google.com/intl/pl/gmail/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              bkuba1401@gmail.com
            </a>
          </p>
        </div>
        <div className="footer__perspective__line">
          <p>Github</p>
          <p>
            <a
              href="https://github.com/JakubBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              JakubBot
            </a>
          </p>
        </div>
      </div>
      <div className="footer__contact">
        <h3 className="footer__contact__header">Contact Me</h3>
        <form onSubmit={sendEmail}>
          <Textinput
            name="name"
            value={contactForm.name}
            onChange={handleChange}
            labelText="name"
            errors={errors.name}
          />
          <Textinput
            name="email"
            value={contactForm.email}
            onChange={handleChange}
            labelText="email"
            errors={errors.email}
          />
          <Textinput
            name="message"
            value={contactForm.message}
            onChange={handleChange}
            labelText="message"
            errors={errors.message}
          />
          <button type="submit" className="footer__circle">
            <span>{contactForm.button}</span>
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
