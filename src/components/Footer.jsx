import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__section">
            <h3 className="footer__title">Premium</h3>
            <p className="footer__description">
              Experience ultra-modern shopping with premium products and exceptional service.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-btn" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Support</h4>
            <ul className="footer__links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Contact</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <Mail size={18} />
                <span>support@premium.com</span>
              </div>
              <div className="footer__contact-item">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="footer__contact-item">
                <MapPin size={18} />
                <span>123 Premium St, City, State</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>&copy; {currentYear} Premium E-Commerce. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
