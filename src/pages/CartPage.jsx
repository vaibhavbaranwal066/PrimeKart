import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '../components';
import { useCartStore } from '../store';
import { formatCurrency } from '../utils/helpers';
import './CartPage.css';

const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <>
        <Helmet><title>Shopping Cart | Premium E-Commerce</title></Helmet>
        <div className="cart-page">
          <div className="container">
            <div className="empty-cart">
              <h1>Your Cart is Empty</h1>
              <p>Start shopping to add items to your cart</p>
              <Link to="/products"><Button>Continue Shopping</Button></Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet><title>Shopping Cart | Premium E-Commerce</title></Helmet>
      <div className="cart-page">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="cart-grid">
            <div className="cart-items">
              {items.map((item) => (
                <motion.div key={item.id} className="cart-item" layout>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item__info">
                    <h3>{item.name}</h3>
                    <p className="cart-item__price">{formatCurrency(item.price)}</p>
                  </div>
                  <div className="cart-item__quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={18} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="cart-item__total">
                    {formatCurrency(item.price * item.quantity)}
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping (FREE)</span>
                <span>$0.00</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <Link to="/checkout"><Button size="lg" className="w-full">Proceed to Checkout</Button></Link>
              <Link to="/products"><button className="continue-shopping">Continue Shopping</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
