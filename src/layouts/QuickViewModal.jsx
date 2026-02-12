import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { Modal, Button, Rating } from '../components';
import { formatCurrency, calculateDiscount } from '../utils/helpers';
import { useCartStore, useWishlistStore } from '../store';
import './QuickViewModal.css';

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const { addItem: addToCart } = useCartStore();
  const { isInWishlist, addItem: addToWishlist, removeItem } = useWishlistStore();

  if (!product) return null;

  const isFavorited = isInWishlist(product.id);
  const discount = calculateDiscount(product.originalPrice, product.price);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onAddToCart?.();
    onClose();
  };

  const handleWishlist = () => {
    if (isFavorited) {
      removeItem(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Modal
      isOpen={!!product}
      onClose={onClose}
      size="lg"
      title={product.name}
    >
      <div className="quick-view">
        <div className="quick-view__image">
          <img src={product.image} alt={product.name} />
          {discount > 0 && (
            <div className="quick-view__discount">-{discount}%</div>
          )}
        </div>

        <div className="quick-view__details">
          <div className="quick-view__rating">
            <Rating value={product.rating} count={product.reviews} />
          </div>

          <div className="quick-view__prices">
            <span className="price">{formatCurrency(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="original">{formatCurrency(product.originalPrice)}</span>
            )}
          </div>

          <p className="quick-view__description">{product.description}</p>

          {/* Colors */}
          {product.details.colors.length > 0 && (
            <div className="quick-view__option">
              <label>Color</label>
              <div className="color-selector">
                {product.details.colors.map((color, idx) => (
                  <button
                    key={color}
                    className={`color-option ${selectedColor === idx ? 'active' : ''}`}
                    onClick={() => setSelectedColor(idx)}
                    title={color}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.details.sizes.length > 0 && (
            <div className="quick-view__option">
              <label>Size</label>
              <div className="size-selector">
                {product.details.sizes.map((size, idx) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === idx ? 'active' : ''}`}
                    onClick={() => setSelectedSize(idx)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="quick-view__quantity">
            <label>Quantity</label>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="quick-view__actions">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
            <button
              className={`wishlist-btn ${isFavorited ? 'active' : ''}`}
              onClick={handleWishlist}
              title={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Stock Info */}
          <div className="quick-view__stock">
            {product.inStock ? (
              <span className="in-stock">✓ In Stock ({product.stock} available)</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>

          {/* Product Details */}
          <div className="quick-view__info">
            <p><strong>Brand:</strong> {product.details.brand}</p>
            <p><strong>Material:</strong> {product.details.material}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
