# 🚀 Setup Guide - Premium E-Commerce Application

## Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher
- **Git**: Latest version (optional, for version control)

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd "Advanced E commerce"
```

### 2. Install Dependencies

```bash
npm install
```

This will install all packages from `package.json`:
- React 18.2.0
- Framer Motion 10.16.0
- Zustand 4.4.0
- React Hook Form 7.49.0
- React Router v6
- React Helmet Async
- Lucide React (icons)
- Swiper.js (carousel ready)
- React Hot Toast (notifications ready)
- React Scripts 5.0.1

### 3. Start Development Server

```bash
npm start
```

The app will open at `http://localhost:3000` with hot reloading enabled.

## Available Scripts

### Development

```bash
npm start
```
Runs the app in development mode with hot reload.

### Production Build

```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Testing (Ready to add)

```bash
npm test
```
Structure is ready for unit tests using Jest.

## Project Architecture

### Core Directories

```
src/
├── components/     - Reusable UI components (Button, Card, ProductCard, etc.)
├── pages/         - Route pages (Home, Products, Cart, Checkout, etc.)
├── sections/      - Reusable page sections (Hero, Featured, Categories, etc.)
├── layouts/       - Complex layout components (CartSidebar, QuickViewModal)
├── store/         - Zustand state management (6 independent stores)
├── hooks/         - Custom React hooks (11 custom hooks)
├── utils/         - Utility functions (25+ helper functions)
├── data/          - Mock data (products, categories, testimonials)
├── App.js         - Root component with routing
└── index.js       - React entry point
```

## Page Routes

All pages are accessible via React Router:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, featured products, testimonials |
| `/products` | Products | Browsable catalog with search, filters, and sorting |
| `/products/:id` | Product Detail | Individual product view with image gallery, colors, sizes |
| `/cart` | Shopping Cart | View and manage cart items before checkout |
| `/checkout` | Checkout | 3-step checkout process (shipping, payment, confirmation) |
| `/login` | Login | User authentication page |
| `/signup` | Sign Up | New user registration |
| `/profile` | Profile | User dashboard and account management |
| `/wishlist` | Wishlist | View saved favorite products |
| `*` | 404 | Error page for invalid routes |

## State Management (Zustand)

The app uses 6 independent Zustand stores with localStorage persistence:

### 1. useCartStore
Manages shopping cart operations:
```javascript
import { useCartStore } from './store';

const { items, addItem, removeItem, updateQuantity, getTotalPrice } = useCartStore();
```

### 2. useThemeStore
Manages light/dark theme:
```javascript
import { useThemeStore } from './store';

const { theme, toggleTheme, setTheme } = useThemeStore();
```

### 3. useAuthStore
Manages user authentication:
```javascript
import { useAuthStore } from './store';

const { login, logout, user } = useAuthStore();
```

### 4. useWishlistStore
Manages favorite products:
```javascript
import { useWishlistStore } from './store';

const { items, addItem, removeItem, isInWishlist } = useWishlistStore();
```

### 5. useFilterStore
Manages product filtering:
```javascript
import { useFilterStore } from './store';

const { category, priceRange, sortBy } = useFilterStore();
```

### 6. useRecentlyViewedStore
Tracks recently viewed products:
```javascript
import { useRecentlyViewedStore } from './store';

const { products } = useRecentlyViewedStore();
```

## Custom Hooks

Available custom hooks for common patterns:

```javascript
import {
  useDebounce,
  useIntersectionObserver,
  useLocalStorage,
  useWindowSize,
  useMediaQuery,
  useDeviceType,
  useClickOutside,
  useToggle,
  useFetch,
  usePrevious,
  useScrollPosition
} from './hooks';
```

## Utility Functions

Comprehensive helper functions in `src/utils/helpers.js`:

```javascript
// Formatting
formatCurrency(amount, currency = 'USD')
formatDate(date)
truncateText(text, maxLength)
getInitials(name)

// E-Commerce Logic
calculateDiscount(originalPrice, currentPrice)
calculateCartTotal(items, taxRate, shippingCost, discount)
applyPromoCode(amount, promoCode, availablePromoCodes)
filterProducts(products, filters)
sortProducts(products, sortBy)
searchProducts(products, query)

// Validation
validateEmail(email)
validatePassword(password)
getPasswordStrength(password)

// Utilities
debounce(func, delay)
throttle(func, delay)
scrollToTop()
groupByCategory(products)
generateOrderId()
```

## Component System

### Base UI Components (8 components)

All available from `import { ComponentName } from './components'`:

1. **Button** - Multiple variants (primary, secondary, outline, text, success, danger)
2. **Card** - Reusable container with hover effects
3. **Badge** - Status indicators with 6+ variants
4. **Rating** - Star rating display (interactive)
5. **Input** - Form input with icons, errors, helper text
6. **LoadingSpinner** - Animated loading indicator
7. **Modal** - Animated modal with backdrop blur
8. **ProductCard** - Product showcase with animations

### Layout Components

1. **Navbar** - Responsive navigation with search, theme toggle, cart/wishlist badges
2. **Footer** - Comprehensive footer with links and social media
3. **CartSidebar** - Slide-in shopping cart drawer
4. **QuickViewModal** - Product quick preview modal

## Design System

### CSS Variables (Themeable)

Located in `src/index.css`:

```css
/* Colors */
--color-primary: #ff8c42           /* Orange */
--color-secondary: #6366f1         /* Indigo */
--color-success: #22c55e           /* Green */
--color-error: #ef4444             /* Red */
--color-warning: #f59e0b           /* Amber */
--color-text-primary: #1f2937       /* Dark gray */
--color-text-secondary: #6b7280     /* Medium gray */
--color-bg-primary: #ffffff         /* White */
--color-bg-secondary: #f3f4f6       /* Light gray */
--color-border: #e5e7eb             /* Border color */

/* Spacing */
--radius-sm: 0.375rem
--radius-md: 0.5rem
--radius-lg: 1rem

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
```

### Responsive Breakpoints

```css
Desktop:   1025px and above
Tablet:    641px - 1024px
Mobile:    ≤ 640px
```

## Mock Data

The app includes realistic mock data in `src/data/mock.js`:

- **15 Premium Products** - Complete with prices, ratings, descriptions, images, colors, sizes, materials, brands
- **6 Categories** - Organized product browsing (Electronics, Fashion, Home, Sports, Beauty, Books)
- **4 Testimonials** - Customer reviews with ratings and photos
- **4 Statistics** - Impressive numbers (customers, products sold, countries, rating)
- **3 Shipping Options** - Multiple delivery methods with pricing
- **4 Payment Methods** - Credit Card, Debit Card, PayPal, UPI
- **Promo Codes** - Discount system with code validation

## Animations

The app uses two animation systems:

### 1. Framer Motion (Component Level)
```javascript
import { motion } from 'framer-motion';

<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Interactive content
</motion.div>
```

### 2. CSS Keyframe Animations (Global)
```css
@keyframes fadeIn { /* 0% opacity to 100% */ }
@keyframes slideUp { /* bottom to top */ }
@keyframes float { /* floating motion */ }
@keyframes shimmer { /* loading effect */ }
@keyframes glow { /* glowing badges */ }
```

All animations are GPU-accelerated for 60fps performance.

## Theme System

The app automatically persists theme preference:

```javascript
// Switch theme in component
import { useThemeStore } from './store';

const { theme, toggleTheme } = useThemeStore();

<button onClick={toggleTheme}>
  Current theme: {theme}
</button>
```

Theme CSS automatically adjusts:
- Text colors
- Background colors
- Border colors
- All components adapt

## Performance Optimization

Built-in performance features:

- ✅ **React.memo** - Components prevent unnecessary re-renders
- ✅ **useMemo** - Expensive computations cached
- ✅ **useCallback** - Memoized callback functions
- ✅ **Debounced Search** - Optimized search input
- ✅ **Lazy Loading** - Structure ready for code splitting
- ✅ **Zustand Selectors** - Optimized state subscriptions
- ✅ **CSS Variables** - No runtime style computation
- ✅ **Hardware Acceleration** - GPU-accelerated animations

## SEO & Accessibility

### SEO Features
- React Helmet for dynamic meta tags
- Semantic HTML structure
- Mobile-friendly responsive design
- Structured data ready

### Accessibility
- WCAG 2.1 Level AA compliant
- Semantic HTML (nav, main, footer, etc.)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alternative text structure

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel
```

### Deploy to Netlify

```bash
# Build first
npm run build

# Deploy using Netlify CLI
netlify deploy --prod --dir=build
```

### Deploy to Traditional Hosting

```bash
# Create production build
npm run build

# Upload 'build' folder to your hosting
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Errors
Ensure all import paths use correct case and file extensions:
```javascript
// ✅ Correct
import { Button } from './components';

// ❌ Incorrect
import { button } from './components/button';
```

## Next Steps

After running `npm install && npm start`:

1. **Explore Pages** - Navigate through all routes
2. **Test Features** - Add items to cart, try wishlist, apply filters
3. **Inspect State** - Use browser DevTools to see Zustand stores
4. **Customize** - Modify colors, products, content
5. **Deploy** - Push to production using guides above

## Support & Resources

- **React Docs**: https://react.dev
- **React Router**: https://reactrouter.com
- **Framer Motion**: https://www.framer.com/motion
- **Zustand**: https://github.com/pmndrs/zustand
- **Lucide Icons**: https://lucide.dev

---

**You're all set! 🎉 The premium e-commerce app is ready to run and impress.**

Start with `npm start` and begin exploring!
