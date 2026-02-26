import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Zap } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: 'Customer Focused',
      description: 'We prioritize customer satisfaction in everything we do'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast & Reliable',
      description: 'Quick shipping and reliable service every time'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Quality Products',
      description: 'Handpicked products from trusted sellers'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - PrimeKart</title>
        <meta name="description" content="Learn about PrimeKart - your trusted online shopping destination" />
      </Helmet>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About PrimeKart</h1>
            <p>Your trusted online shopping destination</p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2>Who We Are</h2>
            <p>
              PrimeKart is a leading e-commerce platform dedicated to bringing you the best shopping experience. 
              Since our inception, we've been committed to offering a wide variety of quality products at competitive prices.
            </p>
            <p>
              Our mission is to make online shopping easy, affordable, and enjoyable for everyone. 
              We believe in building long-term relationships with our customers and sellers.
            </p>
          </motion.div>

          {/* Features */}
          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="stat-item">
              <h3>10M+</h3>
              <p>Products</p>
            </div>
            <div className="stat-item">
              <h3>5M+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Sellers</p>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
