import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button, ProductCard, Rating } from '../components';
import { products } from '../data/mock';
import { useCartStore,useWishlistStore } from '../store';
import { formatCurrency, calculateDiscount, getRelatedProducts } from '../utils/helpers';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem: addToCart } = useCartStore();
  const { isInWishlist, addItem: addToWishlist, removeItem } = useWishlistStore();
  
  const isFavorited = isInWishlist(product.id);
  const discount = calculateDiscount(product.originalPrice, product.price);
  const relatedProducts = getRelatedProducts(products, product);

  const handleAddToCart = () => {
    addToCart(product, quantity);
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

      <div className="product-detail-page">
        <div className="container">
          {/* Product Details */}
          <div className="product-detail-grid">
            <div className="product-detail__images">
              <motion.div
                className="main-image"
                key={product.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img src={product.image} alt={product.name} />
                {discount > 0 && (
                  <div className="discount-badge">-{discount}%</div>
                )}
              </motion.div>
              <div className="thumbnail-images">
                {product.images.map((img, idx) => (
                  <button key={idx} className="thumbnail">
                    <img src={img} alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail__info">
              <span className="category">{product.category}</span>
              <h1>{product.name}</h1>

              <div className="rating-section">
                <Rating value={product.rating} count={product.reviews} />
              </div>

              <div className="prices">
                <span className="price">{formatCurrency(product.price)}</span>
                {product.originalPrice > product.price && (
                  <span className="original">{formatCurrency(product.originalPrice)}</span>
                )}
              </div>

              <p className="description">{product.description}</p>

              {/* Colors */}
              {product.details.colors.length > 0 && (
                <div className="option-group">
                  <label>Color: <strong>{product.details.colors[selectedColor]}</strong></label>
                  <div className="color-options">
                    {product.details.colors.map((color, idx) => (
                      <button
                        key={color}
                        className={`color-button ${selectedColor === idx ? 'active' : ''}`}
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
                <div className="option-group">
                  <label>Size: <strong>{product.details.sizes[selectedSize]}</strong></label>
                  <div className="size-options">
                    {product.details.sizes.map((size, idx) => (
                      <button
                        key={size}
                        className={`size-button ${selectedSize === idx ? 'active' : ''}`}
                        onClick={() => setSelectedSize(idx)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="option-group">
                <label>Quantity</label>
                <div className="quantity-box">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              {/* Actions */}
              <div className="actions">
                <Button size="lg" onClick={handleAddToCart} className="flex-1">
                  <ShoppingCart size={20} /> Add to Cart
                </Button>
                <button className={`action-btn ${isFavorited ? 'active' : ''}`} onClick={handleWishlist}>
                  <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                </button>
                <button className="action-btn">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Stock */}
              <div className="stock-info">
                {product.inStock ? (
                  <span className="in-stock">✓ In Stock ({product.stock} items available)</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
              </div>

              {/* Details */}
              <div className="details-info">
                <div className="detail-row">
                  <span>Brand:</span>
                  <strong>{product.details.brand}</strong>
                </div>
                <div className="detail-row">
                  <span>Material:</span>
                  <strong>{product.details.material}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>Related Products</h2>
              <div className="related-grid">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p}/>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
