import TodoItem from "../todoItem";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setListData(data.todos));
  }, []);

  const slicedItems = listData.slice(0, 5);

  return (
    <div>
      {slicedItems.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
