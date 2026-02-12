import { motion } from 'framer-motion';
import { ProductCard } from '../components';
import { products } from '../data/mock';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="featured-products">
      <div className="featured-products__header">
        <h2>Featured Products</h2>
        <p>Handpicked premium products for you</p>
      </div>

      <motion.div
        className="featured-products__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featuredProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;
