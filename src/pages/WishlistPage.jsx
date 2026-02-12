import { Helmet } from 'react-helmet-async';
import { ProductCard } from '../components';
import { useWishlistStore } from '../store';
import './WishlistPage.css';

const WishlistPage = () => {
  const { items } = useWishlistStore();

  return (
    <>
      <Helmet><title>My Wishlist | Premium E-Commerce</title></Helmet>
      <div className="wishlist-page">
        <div className="container">
          <h1>My Wishlist</h1>
          {items.length === 0 ? (
            <div className="empty-wishlist">
              <p>Your wishlist is empty</p>
            </div>
          ) : (
            <div className="wishlist-grid">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
