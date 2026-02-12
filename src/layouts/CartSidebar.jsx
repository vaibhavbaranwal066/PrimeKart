import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store';
import { formatCurrency } from '../utils/helpers';
import { Button } from '../components';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="cart-sidebar"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="cart-sidebar__header">
              <h2>Shopping Cart</h2>
              <button className="cart-sidebar__close" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="cart-sidebar__empty">
                <p>Your cart is empty</p>
                <Button onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <>
                <div className="cart-sidebar__items">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item__content">
                        <h3>{item.name}</h3>
                        <p className="cart-item__price">
                          {formatCurrency(item.price)} x {item.quantity}
                        </p>
                      </div>
                      <div className="cart-item__controls">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className="cart-item__quantity"
                        />
                        <button
                          className="cart-item__remove"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-sidebar__footer">
                  <div className="cart-sidebar__total">
                    <span>Total:</span>
                    <span className="total-amount">{formatCurrency(total)}</span>
                  </div>
                  <Link to="/checkout" className="cart-sidebar__checkout">
                    <Button size="lg" className="w-full">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <button className="cart-sidebar__continue" onClick={onClose}>
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
