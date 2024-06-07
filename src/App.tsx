import { useState } from "react";
import "./App.css";
import "./App.scss";
import { TodoItem } from "./types/TodoItem";
import AddToDo from "./components/add-to-do/add-to-do.component";
import ToDoList from "./components/to-do-list/to-do-list.component";
import ToDoCounter from "./components/to-do-counter/to-do-counter.component";
import ChangeMode from "./components/change-mode/change-mode.component";

function App() {
  const [mode, setMode] = useState("all");
  const [data, setData] = useState<TodoItem[]>([
    { id: 1, text: "Тестовое задание", checked: false },
    { id: 2, text: "Прекрасный код ", checked: true },
    { id: 3, text: "Покрытие тестами", checked: false },
  ]);

  function handleClear() {
    setData(data.filter((el) => el.checked !== true));
  }
  return (
    <>
      <div className="dotoapp">
        <h1>todos</h1>
        <AddToDo onData={data} onSetData={setData} />
        <ToDoList onData={data} onMode={mode} onSetData={setData} />
        <div className="footer">
          <ToDoCounter onData={data} />
          <ChangeMode onSetMode={setMode} />
          <button onClick={handleClear}>Clear completed</button>
        </div>
      </div>
    </>
  );
}

export default App;
