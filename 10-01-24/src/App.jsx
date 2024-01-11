import "./App.scss";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList/";

function App() {
  return (
    <div className="App">
      <h1 className="To-do-list">TO-DO LIST</h1>
      <AddTodoInput />
      <TodoList />
    </div>
  );
}

export default App;
