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
  // ✅ Metronic Classes: Soft background, subtle border, aur focus par blue shadow
  const inputBaseClass = `
    w-full px-4 py-3 text-[13px] font-medium transition-all duration-200 
    bg-[#f9f9f9] border border-[#f1f1f2] rounded-lg
    text-[#252f4a] placeholder:text-[#78829d]
    focus:bg-white focus:border-[#1b84ff] focus:ring-0 outline-none
    disabled:bg-[#f1f1f2] disabled:cursor-not-allowed
  `;

  const errorClass = error ? "border-red-500 focus:border-red-500" : "";

  return (
    <div className={`flex flex-col w-full mb-5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] font-semibold text-[#252f4a] mb-2 px-1"
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
        className={`${inputBaseClass} ${errorClass}`}
        aria-invalid={!!error}
        {...props}
      />
      
      {error && (
        <p className="text-[#f8285a] text-[11px] font-medium mt-1.5 px-1">
          {error}
        </p>
      )}
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default InputBox;