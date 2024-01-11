import "./index.scss";

export const TodoItem = ({ todoData, setListData }) => {
  const onHandleClick = (e) => {
    setListData((prev) => prev.filter((item) => item.id !== todoData.id));
  };

  return (
    <li className="Todo-item">
      <p className="p">{todoData.todo}</p>
      <button className="button" onClick={onHandleClick}>
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
