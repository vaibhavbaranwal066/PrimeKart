import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, ShoppingCart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Rating } from '../components';
import { products } from '../data/mock';
import { formatCurrency, calculateDiscount } from '../utils/helpers';
import { useCartStore, useWishlistStore } from '../store';
import './ProductDetail.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const { addItem: addToCart } = useCartStore();
  const { isInWishlist, addItem: addToWishlist, removeItem } = useWishlistStore();

  if (!product) {
    return <div className="container"><p>Product not found</p></div>;
  }

  const isFavorited = isInWishlist(product.id);
  const discount = calculateDiscount(product.originalPrice, product.price);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert('Added to cart!');
  };

  const handleWishlist = () => {
    if (isFavorited) {
      removeItem(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Premium E-Commerce</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="product-detail">
        <div className="container">
          <div className="detail-grid">
            {/* Images */}
            <div className="detail-images">
              <motion.img
                key={selectedColor}
                src={product.images[selectedColor] || product.image}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </div>

            {/* Details */}
            <div className="detail-content">
              <span className="detail-category">{product.category}</span>
              <h1 className="detail-title">{product.name}</h1>

              <div className="detail-rating">
                <Rating value={product.rating} count={product.reviews} />
              </div>

              <div className="detail-prices">
                <span className="price">{formatCurrency(product.price)}</span>
                {product.originalPrice > product.price && (
                  <span className="original">{formatCurrency(product.originalPrice)}</span>
                )}
                {discount > 0 && <span className="discount">-{discount}%</span>}
              </div>

              <p className="detail-description">{product.description}</p>

              {/* Colors */}
              {product.details.colors.length > 0 && (
                <div className="detail-option">
                  <label>Color: {product.details.colors[selectedColor]}</label>
                  <div className="option-buttons">
                    {product.details.colors.map((color, idx) => (
                      <button
                        key={color}
                        className={`option-btn ${selectedColor === idx ? 'active' : ''}`}
                        onClick={() => setSelectedColor(idx)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.details.sizes.length > 0 && (
                <div className="detail-option">
                  <label>Size: {product.details.sizes[selectedSize]}</label>
                  <div className="option-buttons">
                    {product.details.sizes.map((size, idx) => (
                      <button
                        key={size}
                        className={`option-btn ${selectedSize === idx ? 'active' : ''}`}
                        onClick={() => setSelectedSize(idx)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="detail-option">
                <label>Quantity</label>
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} min="1" />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              {/* Actions */}
              <div className="detail-actions">
                <Button size="lg" onClick={handleAddToCart}>
                  <ShoppingCart size={20} /> Add to Cart
                </Button>
                <button
                  className={`wishlist-btn ${isFavorited ? 'active' : ''}`}
                  onClick={handleWishlist}
                  title="Add to wishlist"
                >
                  <Heart size={24} fill={isFavorited ? 'currentColor' : 'none'} />
                </button>
                <button className="share-btn" title="Share product">
                  <Share2 size={24} />
                </button>
              </div>

              {/* Stock */}
              <div className="detail-stock">
                {product.inStock ? (
                  <p>✓ In Stock ({product.stock} available)</p>
                ) : (
                  <p>Out of Stock</p>
                )}
              </div>

              {/* Details */}
              <div className="detail-specs">
                <h3>Specifications</h3>
                <p><strong>Brand:</strong> {product.details.brand}</p>
                <p><strong>Material:</strong> {product.details.material}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
