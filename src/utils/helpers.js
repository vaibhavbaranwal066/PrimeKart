// Format Currency
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format Number
export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

// Calculate Discount Percentage
export const calculateDiscount = (original, current) => {
  return Math.round(((original - current) / original) * 100);
};

// Filter Products
export const filterProducts = (products, filters) => {
  return products.filter(product => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Price filter
    if (filters.priceRange && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) {
      return false;
    }

    // Rating filter
    if (filters.rating && product.rating < filters.rating) {
      return false;
    }

    // Sizes filter
    if (filters.sizes && filters.sizes.length > 0 && !filters.sizes.some(size => product.details.sizes.includes(size))) {
      return false;
    }

    // Colors filter
    if (filters.colors && filters.colors.length > 0 && !filters.colors.some(color => product.details.colors.includes(color))) {
      return false;
    }

    return true;
  });
};

// Sort Products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.reverse();
    default:
      return sorted;
  }
};

// Search Products
export const searchProducts = (products, query) => {
  if (!query.trim()) return products;

  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.details.brand.toLowerCase().includes(lowerQuery)
  );
};

// Generate Slug
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Truncate Text
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

// Get initials from Name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

// Calculate Tax
export const calculateTax = (amount, taxRate = 0.1) => {
  return Math.round(amount * taxRate * 100) / 100;
};

// Apply Promo Code
export const applyPromoCode = (amount, promoCode, promoCodes) => {
  const code = promoCodes[promoCode];
  if (!code || amount < code.minAmount) return { discount: 0, finalAmount: amount };

  const discount = code.type === 'percentage'
    ? (amount * code.discount) / 100
    : code.discount;

  return {
    discount: Math.round(discount * 100) / 100,
    finalAmount: Math.round((amount - discount) * 100) / 100
  };
};

// Generate Order ID
export const generateOrderId = () => {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

// Format Date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
};

// Calculate Average Rating
export const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

// Get Related Products
export const getRelatedProducts = (products, currentProduct, limit = 4) => {
  return products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, limit);
};

// Validate Email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate Password
export const validatePassword = (password) => {
  return password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password);
};

// Get Password Strength
export const getPasswordStrength = (password) => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  return ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength];
};

// Debounce Function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle Function
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Scroll to Top
export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto'
  });
};

// Scroll to Element
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const topPosition = element.offsetTop - offset;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  }
};

// Copy to Clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

// Get Gradient Background
export const getGradientBackground = () => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

// Calculate Cart Total
export const calculateCartTotal = (items, taxRate = 0.1, shippingCost = 0, discount = 0) => {
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = calculateTax(subtotal, taxRate);
  const total = subtotal + tax + shippingCost - discount;
  
  return {
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    shippingCost,
    discount,
    total: Math.round(total * 100) / 100
  };
};
