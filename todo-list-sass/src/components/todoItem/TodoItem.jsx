import styles from "./index.module.scss";

export const TodoItem = ({ todoData, setListData }) => {
  const { id, todo } = todoData;
  const onHandleDelete = () => {
    setListData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <li className={styles.TodoItem}>
      <p className={styles.p}>{todo}</p>
      <button className={styles.button} onClick={onHandleDelete}>
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
