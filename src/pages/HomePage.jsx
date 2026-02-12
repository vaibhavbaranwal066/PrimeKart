import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star } from 'lucide-react';
import { Button, ProductCard } from '../components';
import { products, testimonials, stats } from '../data/mock';
import { useIntersectionObserver } from '../hooks';
import Hero from '../sections/Hero';
import FeaturedProducts from '../sections/FeaturedProducts';
import CategoriesSection from '../sections/CategoriesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import NewsletterSection from '../sections/NewsletterSection';
import './HomePage.css';

const HomePage = () => {
  const statsRef = useRef(null);
  const showStats = useIntersectionObserver(statsRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Premium E-Commerce | Ultra-Modern Shopping Experience</title>
        <meta name="description" content="Experience premium shopping with our ultra-modern e-commerce platform featuring exclusive products and exceptional service." />
        <meta property="og:title" content="Premium E-Commerce" />
        <meta property="og:description" content="Ultra-modern shopping experience" />
      </Helmet>

      <Hero />

      <section className="home__featured">
        <div className="container">
          <FeaturedProducts />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="home__stats">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate={showStats ? 'visible' : 'hidden'}
          >
            {stats.map(( stat, idx) => (
              <motion.div key={idx} className="stat-card" variants={itemVariants}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">
                  {stat.label}
                  {stat.suffix && ` ${stat.suffix}`}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="home__categories">
        <div className="container">
          <CategoriesSection />
        </div>
      </section>

      <section className="home__testimonials">
        <div className="container">
          <TestimonialsSection />
        </div>
      </section>

      <section className="home__cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Discover Our Full Collection</h2>
            <p>Browse through our carefully curated selection of premium products</p>
            <Link to="/products">
              <Button size="lg">
                Shop Now
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="home__newsletter">
        <div className="container">
          <NewsletterSection />
        </div>
      </section>
    </>
  );
};

export default HomePage;
