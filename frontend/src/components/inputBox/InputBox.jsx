
import "./InputBox.css";
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

    const inputClass = `input-custom ${error ? "input-error" : ""}`;
  return (
    <div className="input-box-wrapper flex flex-col w-full">
      {label && (
        <label
          htmlFor={id}
          className="label-coustome"
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
        className={inputClass}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
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
