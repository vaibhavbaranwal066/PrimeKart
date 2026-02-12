import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Cart Store
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          return { items: [...state.items, { ...product, quantity }] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    { name: 'cart-storage' }
  )
);

// Theme Store
export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
          return { theme: newTheme };
        });
      },
      setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        set({ theme });
      }
    }),
    { name: 'theme-storage' }
  )
);

// Auth Store
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => set({
        user: userData,
        isAuthenticated: true
      }),
      logout: () => set({
        user: null,
        isAuthenticated: false
      }),
      updateProfile: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      }))
    }),
    { name: 'auth-storage' }
  )
);

// Wishlist Store
export const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          if (state.items.find(item => item.id === product.id)) {
            return state;
          }
          return { items: [...state.items, product] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        }));
      },
      clearWishlist: () => set({ items: [] }),
      isInWishlist: (productId) => {
        return get().items.some(item => item.id === productId);
      }
    }),
    { name: 'wishlist-storage' }
  )
);

// Filters Store
export const useFilterStore = create((set) => ({
  filters: {
    category: null,
    priceRange: [0, 5000],
    rating: null,
    sizes: [],
    colors: [],
    sortBy: 'popularity'
  },
  setFilters: (newFilters) => set({ filters: newFilters }),
  resetFilters: () => set({
    filters: {
      category: null,
      priceRange: [0, 5000],
      rating: null,
      sizes: [],
      colors: [],
      sortBy: 'popularity'
    }
  })
}));

// Recently Viewed Store
export const useRecentlyViewedStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          const filtered = state.items.filter(item => item.id !== product.id);
          return { items: [product, ...filtered].slice(0, 10) };
        });
      },
      clearHistory: () => set({ items: [] })
    }),
    { name: 'recently-viewed-storage' }
  )
);
