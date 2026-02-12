import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ProductCard } from '../components';
import { products, categories } from '../data/mock';
import { filterProducts, sortProducts, searchProducts } from '../utils/helpers';
import './ProductsPage.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search
    result = searchProducts(result, searchQuery);

    // Filter
    result = filterProducts(result, {
      category: selectedCategory,
      priceRange,
      sortBy
    });

    // Sort
    result = sortProducts(result, sortBy);

    return result;
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Products | Premium E-Commerce</title>
        <meta name="description" content="Browse our full collection of premium products" />
      </Helmet>

      <div className="products-page">
        <div className="products-page__container">
          {/* Sidebar */}
          <aside className="products-page__sidebar">
            {/* Search */}
            <div className="filter-section">
              <h3>Search</h3>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Categories */}
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="category-list">
                <button
                  className={`category-item ${!selectedCategory ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-item ${selectedCategory === cat.slug ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.slug)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-inputs">
                <input
                  type="number"
                  min="0"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="price-input"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="price-input"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="filter-section">
              <h3>Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </aside>

          {/* Main Content */}
          <main className="products-page__main">
            <div className="products-page__header">
              <h1>Our Products</h1>
              <p>Found {filteredProducts.length} products</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="products-page__empty">
                <p>No products found. Try adjusting your filters.</p>
              </div>
            ) : (
              <motion.div
                className="products-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProducts.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
