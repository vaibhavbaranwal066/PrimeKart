import './Badge.css';

const Badge = ({ children, variant = 'default', size = 'md', icon: Icon, ...props }) => {
  return (
    <span className={`badge badge--${variant} badge--${size}`} {...props}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};

export default Badge;
