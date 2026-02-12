import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'md', fullscreen = false }) => {
  if (fullscreen) {
    return (
      <div className="spinner--fullscreen">
        <div className={`spinner spinner--${size}`} />
      </div>
    );
  }

  return <div className={`spinner spinner--${size}`} />;
};

export default LoadingSpinner;
