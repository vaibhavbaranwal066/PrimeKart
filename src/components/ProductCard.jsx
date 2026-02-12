import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import Badge from './Badge';
import Rating from './Rating';
import { formatCurrency, calculateDiscount } from '../utils/helpers';
import { useWishlistStore, useCartStore } from '../store';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  const { isInWishlist, addItem, removeItem } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();
  const isFavorited = isInWishlist(product.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    if (isFavorited) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    onAddToCart?.();
  };

  const discount = calculateDiscount(product.originalPrice, product.price);

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />

        {product.badges.length > 0 && (
          <div className="product-card__badges">
            {product.badges.map((badge) => (
              <Badge key={badge} variant={badge.toLowerCase()}>
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {discount > 0 && (
          <div className="product-card__discount">
            -{discount}%
          </div>
        )}

        <motion.div
          className="product-card__overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="product-card__action btn btn--primary btn--sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <button
            className="product-card__action btn btn--secondary btn--sm"
            onClick={() => onQuickView?.(product)}
          >
            <Eye size={18} />
            Quick View
          </button>
        </motion.div>

        <motion.button
          className={`product-card__wishlist ${isFavorited ? 'active' : ''}`}
          onClick={handleWishlist}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
        </motion.button>
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>

        <div className="product-card__rating">
          <Rating value={product.rating} count={product.reviews} />
        </div>

        <div className="product-card__prices">
          <span className="product-card__price">
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="product-card__original">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="product-card__stock">
          {product.inStock ? (
            <span className="stock-available">In Stock</span>
          ) : (
            <span className="stock-unavailable">Out of Stock</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
