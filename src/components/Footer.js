import React from 'react';
import { Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <Col md="4" className="footer-copywright text-center">
        <h3>Copyright © {year} Sabrina Mesquita</h3>
      </Col>
    </div>
  );
}

export default Footer;
