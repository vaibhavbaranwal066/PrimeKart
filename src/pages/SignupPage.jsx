import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <>
      <Helmet><title>Sign Up | Premium E-Commerce</title></Helmet>
      <div className="auth-page">
        <div className="auth-form-container">
          <h1>Create Account</h1>
          <form className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" required />
            </div>
            <Button size="lg" className="w-full">Sign Up</Button>
          </form>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
