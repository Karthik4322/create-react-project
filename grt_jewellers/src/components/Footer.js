import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { RiAmazonLine } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import footerstyle from '../styles/footer.css'; // Ensure this path is correct

const Footer = () => {
  const makeInline = {
    display: "inline",
    padding: "5px"
  };

  return (
    <div>
      <footer className="bg-primary text-white pt-4">
        <div className="container">
          <div className="row">
            {/* Contact Us Section */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <p>
                <FaPhoneAlt /> +91 1234-567-890
              </p>
              <p>
                <FaEnvelope /> support@jewelryshop.com
              </p>
              <p>
                <FaMapMarkerAlt /> 123 Gold Street, Diamond City, India
              </p>
            </div>

            {/* Store Locator Section */}
            <div className="col-md-3 mb-4">
              <h5>Store Locator</h5>
              <p>
                <a href="/store-locator" className="text-white text-decoration-none">
                  Find your nearest store
                </a>
              </p>
            </div>

            {/* Enquiry Form Section */}
            <div className="col-md-3 mb-4">
              <h5>Enquiry Form</h5>
              <p>
                <a href="/enquiry" className="text-white text-decoration-none">
                  Have questions? Enquire here
                </a>
              </p>
            </div>

            {/* Payments Accepted Section */}
            <div className="col-md-3 mb-4">
              <h5>Payments Accepted</h5>
              <p style={makeInline}>
                <FaCcVisa />
              </p>
              <p style={makeInline}>
                <FaCcMastercard />
              </p>
              <p style={makeInline}>
                <RiAmazonLine />
              </p>
              <p style={makeInline}>
                <FaCcPaypal />
              </p>
            </div>
          </div>

          <hr className="border-light" />

          <div className="row">
            {/* Download Our App Section */}
            <div className="col-md-4 mb-4">
              <h5>Download Our Free App</h5>
              <a href="#" className="btn btn-outline-light me-2">
                <AiFillAndroid /> Android
              </a>
              <a href="#" className="btn btn-outline-light">
                <AiFillApple /> iOS
              </a>
            </div>

            {/* Certifications Section */}
            <div className="col-md-4 mb-4 text-center">
              <h5>Certifications</h5>
              <p>
                <PiCertificateBold />
              </p>
            </div>

            {/* Social Media Links Section */}
            <div className="col-md-4 mb-4 text-end">
              <h5>Follow Us</h5>
              <a href="https://facebook.com" target="_blank" className="text-white me-3" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white me-3" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-white me-3" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" className="text-white" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          <hr className="border-light" />

          {/* Copyright Section */}
          <div className="text-center pb-3">
            <p className="mb-0">© {new Date().getFullYear()} Jewelry Shop. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
