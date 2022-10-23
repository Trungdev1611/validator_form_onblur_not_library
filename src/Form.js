import { useState } from "react";

function FormInput({
  type,
  placeholder,
  pattern,
  name,
  onChange,
  error,
  value,
  formData
}) {
  const [blurInput, setBlueInput] = useState(false);
  function handleblur() {
    setBlueInput(true);
  }
  console.log(blurInput, value);
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={handleblur}
        onFocus={() => setBlueInput(false)}
      />
      {blurInput && <p className="error">{error}</p>}
    </div>
  );
}

export default FormInput;
