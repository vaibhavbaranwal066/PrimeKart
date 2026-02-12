import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <>
      <Helmet><title>Page Not Found | Premium E-Commerce</title></Helmet>
      <div className="not-found-page">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/"><Button size="lg">Go Home</Button></Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
