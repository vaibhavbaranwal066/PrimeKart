import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Input } from '../components';
import { useCartStore } from '../store';
import { formatCurrency } from '../utils/helpers';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice } = useCartStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process order
      alert('Order placed successfully!');
      navigate('/');
    }
  };

  const total = getTotalPrice();

  return (
    <>
      <Helmet><title>Checkout | Premium E-Commerce</title></Helmet>
      <div className="checkout-page">
        <div className="container">
          <h1>Checkout</h1>
          <div className="checkout-grid">
            <div className="checkout-main">
              {/* Steps */}
              <div className="checkout-steps">
                {[1, 2, 3].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`step ${step >= stepNum ? 'active' : ''} ${step === stepNum ? 'current' : ''}`}
                    onClick={() => step > stepNum && setStep(stepNum)}
                  >
                    <div className="step-number">{stepNum}</div>
                    <span className="step-label">
                      {stepNum === 1 ? 'Shipping' : stepNum === 2 ? 'Payment' : 'Confirmation'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="checkout-form">
                {step === 1 && (
                  <motion.div
                    className="form-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2>Shipping Address</h2>
                    <div className="form-grid">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="col-span-2"
                      />
                      <Input
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="ZIP Code"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    className="form-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2>Payment Details</h2>
                    <div className="form-grid">
                      <Input
                        label="Cardholder Name"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="col-span-2"
                      />
                      <Input
                        label="Card Number"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="col-span-2"
                      />
                      <Input
                        label="Expiry Date"
                        placeholder="MM/YY"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="CVV"
                        placeholder="123"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    className="form-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2>Order Confirmation</h2>
                    <div className="confirmation-summary">
                      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zip}</p>
                      <p className="mt-4"><strong>Total Items:</strong> {items.length}</p>
                      <p><strong>Grand Total:</strong> {formatCurrency(total)}</p>
                    </div>
                    <p className="confirmation-note">Click "Place Order" to confirm your purchase</p>
                  </motion.div>
                )}

                <div className="form-actions">
                  {step > 1 && (
                    <Button type="button" variant="secondary" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  )}
                  <Button type="submit">
                    {step === 3 ? 'Place Order' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="order-summary">
              <h2>Order Summary</h2>
              {items.map((item) => (
                <div key={item.id} className="summary-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="summary-total">
                <span>Total:</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
