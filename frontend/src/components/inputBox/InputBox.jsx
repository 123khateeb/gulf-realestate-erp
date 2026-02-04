import PropTypes from "prop-types";  

const InputBox = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  readonly = false,
  error = "",
  className = "",
  id,
  ...props
}) => {
  const inputBaseClass = `
    w-full px-4 py-3 transition-all duration-200 rounded-lg outline-none
    text-[var(--font-size-13px)] font-[var(--font-weight-500)]
    
    /* Background & Border colors */
    bg-[var(--color-bg-input)] border border-[var(--color-border-subtle)]
    text-[var(--color-text-header)] placeholder:text-[var(--color-text-muted)]
    
    /* ✅ Metronic Style Interaction */
    hover:border-[var(--color-primary)] 
    focus:bg-[var(--color-bg-card)] focus:border-[var(--color-primary)] 
    focus:ring-4 focus:ring-[var(--color-primary)]/5
    
    disabled:bg-[var(--color-border-subtle)] disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const errorBorder = error ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/5" : "";

  return (
    <div className={`flex flex-col w-full mb-5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-[var(--font-size-13px)] font-[var(--font-weight-600)] text-[var(--color-text-header)] mb-2 px-1"
        >
          {label}
        </label>
      )}
      
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        className={`${inputBaseClass} ${errorBorder}`}
        {...props}
      />
      
      {error && (
        <p className="text-[var(--color-danger)] text-[var(--font-size-11px)] font-[var(--font-weight-500)] mt-1.5 px-1">
          {error}
        </p>
      )}
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default InputBox;