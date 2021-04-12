import React, { useEffect, useState } from 'react';
import Textinput from '../common/TextInput';
import CircleType from 'circletype';
import { gsap } from 'gsap';
import './index.scss';

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <footer className="footer">
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
          <p>KubaBot</p>
        </div>
        <div className="footer__perspective__line small-font">
          <p>Email</p>
          <p>bkuba1401@gmail.com</p>
        </div>
        <div className="footer__perspective__line">
          <p>Github</p>
          <p>JakubBot</p>
        </div>
      </div>
      <div className="footer__contact">
        <h3 className="footer__contact__header">Here</h3>
        <form>
          <Textinput
            name="email"
            value={contactForm.email}
            onChange={handleChange}
            labelText="email"
          />
          <Textinput
            name="message"
            value={contactForm.message}
            onChange={handleChange}
            labelText="message"
          />
          <button type="button" className="footer__circle">
            <span>Send</span>
          </button>
        
        </form>
      </div>
    </footer>
  );
};

export default Footer;
