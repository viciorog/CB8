import TodoItem from "../todoItem";
import styles from "./index.module.scss";
const TodoList = ({ listData, setListData }) => {
  const reverseTodoListData = [...listData].reverse();
  return (
    <div className={styles.TodoList}>
      {reverseTodoListData.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} setListData={setListData} />
      ))}
    </div>
  );
};

export default TodoList;
