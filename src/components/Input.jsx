import React from 'react';
import './Input.css';

const Input = React.forwardRef((
  {
    type = 'text',
    placeholder = '',
    value,
    onChange,
    onBlur,
    error,
    icon: Icon,
    disabled = false,
    className = '',
    label,
    helperText,
    ...props
  },
  ref
) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <div className={`input-container ${error ? 'input-container--error' : ''}`}>
        {Icon && <Icon className="input-icon" size={20} />}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`input ${className}`}
          {...props}
        />
      </div>
      {error && <span className="input-error">{error}</span>}
      {helperText && <span className="input-helper">{helperText}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
