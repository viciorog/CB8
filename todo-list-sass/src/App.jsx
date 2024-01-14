import "./App.scss";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList/";
import { useState, useEffect } from "react";

function App() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setListData(data.todos));
  }, []);

  return (
    <div>
      <h1>TO-DO LIST</h1>
      <AddTodoInput setListData={setListData} />
      <TodoList listData={listData} setListData={setListData} />
    </div>
  );
}

export default App;
