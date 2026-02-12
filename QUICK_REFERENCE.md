# 🎯 Quick Reference Guide - Premium E-Commerce App

## 🚀 Quick Start (60 Seconds)

```bash
cd "Advanced E commerce"
npm install
npm start
# Opens at http://localhost:3000 ✨
```

---

## 📚 Common Tasks

### Adding a Product
Edit `src/data/mock.js`:
```javascript
{
  id: 16,
  name: "New Product",
  category: "Electronics",
  price: 99.99,
  originalPrice: 149.99,
  rating: 4.5,
  reviews: 120,
  description: "Product description",
  images: ["url1", "url2"],
  details: {
    colors: ["Black", "White"],
    sizes: ["S", "M", "L"],
    brand: "Brand Name",
    material: "Material"
  },
  badges: ["Hot"],
  stock: 50,
  inStock: true
}
```

### Changing Colors
Edit `src/index.css`:
```css
:root {
  --color-primary: #ff8c42;      /* Orange */
  --color-secondary: #6366f1;    /* Indigo */
  /* ... update any color ... */
}
```

### Adding a Route
Edit `src/App.js`:
```javascript
<Route path="/new-page" element={<NewPageComponent />} />
```

### Using Cart
```javascript
import { useCartStore } from './store';

const { items, addItem, removeItem } = useCartStore();

// Add item
addItem(productObject);

// Remove item
removeItem(productId);
```

### Using Theme
```javascript
import { useThemeStore } from './store';

const { theme, toggleTheme } = useThemeStore();

<button onClick={toggleTheme}>
  Current: {theme}
</button>
```

### Using Search
```javascript
import { searchProducts } from './utils/helpers';

const results = searchProducts(products, "search query");
```

### Creating a Component
```javascript
import { motion } from 'framer-motion';
import { Button } from './components';
import './MyComponent.css';

const MyComponent = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="my-component"
    >
      <Button>Click me</Button>
    </motion.div>
  );
};

export default MyComponent;
```

---

## 🎨 Icons Available (From Lucide React)

All Lucide icons available:
```javascript
import { 
  ShoppingCart, Heart, Menu, X, Search,
  Sun, Moon, User, Star, ChevronDown,
  Check, AlertCircle, Home, Package,
  CreditCard, MapPin, Lock
} from 'lucide-react';
```

See all at: https://lucide.dev

---

## 📊 State Stores Cheat Sheet

### Cart Store
```javascript
import { useCartStore } from './store';

const { 
  items,                    // Array of items
  addItem,                  // Add product
  removeItem,               // Remove by ID
  updateQuantity,           // Update qty
  clearCart,                // Empty cart
  getTotalPrice,            // Get total
  getTotalItems             // Get count
} = useCartStore();
```

### Theme Store
```javascript
import { useThemeStore } from './store';

const { 
  theme,                    // 'light' or 'dark'
  toggleTheme,              // Switch theme
  setTheme                  // Set specific theme
} = useThemeStore();
```

### Wishlist Store
```javascript
import { useWishlistStore } from './store';

const { 
  items,                    // Array of items
  addItem,                  // Add product
  removeItem,               // Remove by ID
  isInWishlist,             // Check if in list
  clearWishlist             // Clear all
} = useWishlistStore();
```

### Auth Store
```javascript
import { useAuthStore } from './store';

const { 
  user,                     // Current user
  login,                    // Login user
  logout,                   // Logout
  updateProfile             // Update info
} = useAuthStore();
```

### Filter Store
```javascript
import { useFilterStore } from './store';

const { 
  category,                 // Selected category
  priceRange,               // Min/max price
  sortBy,                   // Sort option
  setCategory,              // Change category
  setPriceRange,            // Change price
  setSorting                // Change sort
} = useFilterStore();
```

---

## 🪝 Hooks Cheat Sheet

### Debounce Search
```javascript
import { useDebounce } from './hooks';

const searchQuery = useDebounce(input, 300);
```

### Intersection Observer (Scroll Reveal)
```javascript
import { useIntersectionObserver } from './hooks';

const ref = useRef(null);
useIntersectionObserver(ref, { threshold: 0.5 });
// Element now triggers animations on scroll
```

### Local Storage
```javascript
import { useLocalStorage } from './hooks';

const [saved, setSaved] = useLocalStorage('key', 'default');
```

### Device Detection
```javascript
import { useDeviceType } from './hooks';

const { isMobile, isTablet, isDesktop } = useDeviceType();
```

### Click Outside
```javascript
import { useClickOutside } from './hooks';

const ref = useRef(null);
useClickOutside(ref, () => {
  console.log('Clicked outside!');
});
```

---

## 🛠️ Utility Functions

### Format Currency
```javascript
import { formatCurrency } from './utils/helpers';

formatCurrency(99.99);           // "$99.99"
formatCurrency(99.99, 'EUR');    // "€99,99"
```

### Calculate Discount
```javascript
import { calculateDiscount } from './utils/helpers';

calculateDiscount(100, 50);      // 50 (percent)
```

### Filter Products
```javascript
import { filterProducts } from './utils/helpers';

filterProducts(products, {
  category: 'Electronics',
  minPrice: 50,
  maxPrice: 500,
  minRating: 4
});
```

### Sort Products
```javascript
import { sortProducts } from './utils/helpers';

sortProducts(products, 'price-asc');
// Options: 'price-asc', 'price-desc', 'rating', 'newest', 'popularity'
```

### Search Products
```javascript
import { searchProducts } from './utils/helpers';

searchProducts(products, 'laptop');
// Searches name, description, category, brand
```

### Validate Email
```javascript
import { validateEmail } from './utils/helpers';

validateEmail('user@example.com');  // true/false
```

### Validate Password
```javascript
import { validatePassword } from './utils/helpers';

validatePassword('StrongPass123!');  // true/false

// Get strength level
import { getPasswordStrength } from './utils/helpers';

getPasswordStrength('weak');        // 'Weak'
getPasswordStrength('StrongPass1!'); // 'Very Strong'
```

---

## 📱 Responsive Breakpoints

Use in CSS media queries:
```css
/* Tablet and smaller */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 640px) { }

/* Landscape mobile */
@media (max-width: 640px) and (orientation: landscape) { }
```

---

## 🎬 Common Animations

### Hover Scale
```jsx
<motion.div whileHover={{ scale: 1.05 }}>
  Content
</motion.div>
```

### Tap Animation
```jsx
<motion.button whileTap={{ scale: 0.95 }}>
  Click me
</motion.button>
```

### Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Stagger Children
```jsx
<motion.div
  variants={{
    container: {
      staggerChildren: 0.1
    }
  }}
  initial="hidden"
  animate="visible"
  variants={container}
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

---

## 📂 Import Paths Reference

### Components
```javascript
import { Button, Card, ProductCard } from './components';
import Navbar from './components/Navbar';
```

### Layouts
```javascript
import CartSidebar from './layouts/CartSidebar';
import QuickViewModal from './layouts/QuickViewModal';
```

### Pages
```javascript
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
```

### Store
```javascript
import { useCartStore, useThemeStore } from './store';
```

### Hooks
```javascript
import { useDebounce, useDeviceType } from './hooks';
```

### Utils
```javascript
import { formatCurrency, filterProducts } from './utils/helpers';
```

### Data
```javascript
import { products, categories } from './data/mock';
```

---

## 🐛 Debugging Tips

### Check State
```javascript
// In component
const store = useCartStore();
console.log('Cart:', store);
```

### Debug Render
```javascript
import { Profiler } from 'react';

<Profiler id="ComponentName" onRender={onRenderCallback}>
  <YourComponent />
</Profiler>
```

### Check Theme
```javascript
// In browser console
localStorage.getItem('theme-storage');
document.documentElement.getAttribute('data-theme');
```

### Performance
```javascript
// In browser DevTools > Performance tab
// Record interactions and analyze
```

---

## 📊 CSS Utilities

### Flexbox
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: 0.5rem; }
```

### Grid
```css
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
```

### Spacing
```css
.p-1 { padding: 0.5rem; }
.m-2 { margin: 1rem; }
.gap-3 { gap: 1.5rem; }
```

---

## 🔐 Best Practices in This App

1. **Always** use Zustand stores (not React Context for this scale)
2. **Always** memoize expensive computations (useMemo)
3. **Always** debounce search inputs (useDebounce)
4. **Always** use semantic HTML
5. **Always** add aria-labels to icons
6. **Always** test on mobile
7. **Always** use CSS variables (no hardcoded colors)
8. **Always** prefer Framer Motion for UI animations

---

## 🚀 Deploy Checklist

- [ ] Run `npm run build`
- [ ] Test build: `npm install -g serve && serve -s build`
- [ ] Check for console errors
- [ ] Test on mobile
- [ ] Verify all links work
- [ ] Check performance (Lighthouse)
- [ ] Deploy to Vercel/Netlify/Hosting
- [ ] Setup domain
- [ ] Configure SSL
- [ ] Monitor errors

---

## 📞 Need More Help?

- **React**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion
- **Zustand**: https://github.com/pmndrs/zustand
- **Lucide Icons**: https://lucide.dev
- **CSS Tricks**: https://css-tricks.com

---

**Happy coding! 🚀**
