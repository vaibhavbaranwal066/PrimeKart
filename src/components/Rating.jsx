import { Star } from 'lucide-react';
import './Rating.css';

const Rating = ({ value = 0, total = 5, count, interactive = false, onChange, size = 'md' }) => {
  const handleClick = (index) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className={`rating rating--${size} ${interactive ? 'rating--interactive' : ''}`}>
      {Array.from({ length: total }).map((_, index) => (
        <Star
          key={index}
          size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
          className={`${index < Math.floor(value) ? 'filled' : 'empty'}`}
          onClick={() => handleClick(index)}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
        />
      ))}
      {count !== undefined && <span className="rating__count">({count})</span>}
    </div>
  );
};

export default Rating;
