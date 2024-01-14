import styles from "./index.module.scss";
import { useState } from "react";

const AddTodoInput = ({ setListData }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e) => {
    const newTodo = {
      id: new Date().getTime(),
      todo: inputValue,
    };
    e.preventDefault();
    setListData((prev) => [...prev, newTodo]);
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <form className={styles.AddTodoInput} onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className={styles.Input}
        placeholder="Scrivi qui..."
      />
      <input type="submit" className={styles.button} value="ADD" />
    </form>
  );
};

export default AddTodoInput;
