import { useState } from "react";
import "./styles.css";
import { data } from "./constant";
import FormInput from "./Form";
export default function App() {
  const [formData, setFormData] = useState({});
  function onChange(e) {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData);
  return (
    <div className="App">
      <form>
        {data.map((inputItem) => {
          return (
            <FormInput
              type={inputItem.text}
              placeholder={inputItem.placeholder}
              name={inputItem.name}
              pattern={inputItem.pattern}
              error={inputItem.errMsg}
              key={inputItem.id}
              onChange={onChange}
              value={formData[inputItem.name]}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
