import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/mock';
import './CategoriesSection.css';

const CategoriesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="categories-section">
      <h2>Shop by Category</h2>
      <motion.div
        className="categories-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <Link to={`/products?category=${category.slug}`} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.itemCount} items</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoriesSection;
