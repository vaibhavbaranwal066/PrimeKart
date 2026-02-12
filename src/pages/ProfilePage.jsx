import { Helmet } from 'react-helmet-async';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <>
      <Helmet><title>My Profile | Premium E-Commerce</title></Helmet>
      <div className="profile-page">
        <div className="container">
          <h1>My Profile</h1>
          <div className="profile-content">
            <div className="profile-section">
              <h2>Account Information</h2>
              <p>Name: John Doe</p>
              <p>Email: john@example.com</p>
              <p>Member Since: January 2024</p>
            </div>
            <div className="profile-section">
              <h2>Recent Orders</h2>
              <p>No orders yet</p>
            </div>
            <div className="profile-section">
              <h2>Addresses</h2>
              <p>No addresses saved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
