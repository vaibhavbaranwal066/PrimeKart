import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button, Input } from '../components';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <motion.div
      className="newsletter-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on new products and exclusive offers</p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-input-group">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={Mail}
              required
            />
            <Button type="submit" size="md">
              Subscribe
            </Button>
          </div>
        </form>

        {isSubmitted && (
          <motion.p
            className="newsletter-success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            ✓ Thank you for subscribing!
          </motion.p>
        )}

        <p className="newsletter-notice">We respect your privacy. Unsubscribe at any time.</p>
      </div>

      <div className="newsletter-visual">
        <div className="newsletter-icon">📧</div>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
