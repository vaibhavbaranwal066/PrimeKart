import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = [
    { id: 1, name: 'Electronics', icon: '📱', color: '#FF6B6B' },
    { id: 2, name: 'Fashion', icon: '👗', color: '#4ECDC4' },
    { id: 3, name: 'Home & Garden', icon: '🏠', color: '#45B7D1' },
    { id: 4, name: 'Sports', icon: '⚽', color: '#FFA07A' },
    { id: 5, name: 'Books', icon: '📚', color: '#98D8C8' },
    { id: 6, name: 'Toys', icon: '🎮', color: '#F7DC6F' },
  ];

  return (
    <>
      <Helmet>
        <title>Categories - PrimeKart</title>
        <meta name="description" content="Browse all product categories at PrimeKart" />
      </Helmet>

      <div className="categories-page">
        {/* Hero Section */}
        <section className="categories-hero">
          <motion.div
            className="categories-hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Shop by Categories</h1>
            <p>Find exactly what you're looking for</p>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="categories-container">
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div
                  className="category-card__icon"
                  style={{ backgroundColor: category.color }}
                >
                  <span className="icon-text">{category.icon}</span>
                </div>
                <h3>{category.name}</h3>
                <p>Explore now →</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoriesPage;
