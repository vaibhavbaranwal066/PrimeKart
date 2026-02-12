import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__badge">
            ✨ Premium Collection 2024
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__title">
            Experience Epic Shopping
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__subtitle">
            Discover ultra-premium products with exceptional design and unbeatable prices. Shop smart, live better.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <Link to="/products">
              <Button size="lg">
                Shop Now
                <ArrowRight size={20} />
              </Button>
            </Link>
            <button className="hero__secondary-btn">
              Explore More
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__offer">
            🎁 First-time buyers get <strong>20% OFF</strong> with code: WELCOME20
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero__floating-card hero__floating-card--1">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" alt="Product" />
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" alt="Product" />
          </div>
          <div className="hero__floating-card hero__floating-card--3">
            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop" alt="Product" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
