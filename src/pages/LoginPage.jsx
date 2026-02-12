import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Helmet><title>Login | Premium E-Commerce</title></Helmet>
      <div className="auth-page">
        <div className="auth-form-container">
          <h1>Login</h1>
          <form className="auth-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <Button size="lg" className="w-full">Login</Button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
