import "./index.scss";
import { useState } from "react";

const AddTodoInput = () => {
  const [inputValue, setInputValue] = useState([]);

  const onInputChange = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    setInputValue("");
  };

  return (
    <form className="Add-Todo-Input" onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className="Input"
        placeholder="Scrivi qui..."
      />
      <button type="submit" className="button">
        ADD
      </button>
    </form>
  );
};

export default AddTodoInput;
