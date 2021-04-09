import React from 'react';
import './index.scss';

const Footer = () => {
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
    </footer>
  );
};

export default Footer;
