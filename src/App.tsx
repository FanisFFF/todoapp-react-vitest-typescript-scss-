import { useState, ChangeEvent } from "react";
import "./App.css";
import "./App.scss";
import { TodoItem } from "./types/TodoItem";
import TodoElement from "./components/todo-element/todo-element.component";

function App() {
  const [id, setId] = useState(4);
  const [newTodo, setNewTodo] = useState("");
  const [mode, setMode] = useState("all");
  const [data, setData] = useState<TodoItem[]>([
    { id: 1, text: "Тестовое задание", checked: false },
    { id: 2, text: "Прекрасный код ", checked: true },
    { id: 3, text: "Покрытие тестами", checked: false },
  ]);

  function handleApply() {
    setData([...data, { id: id, text: newTodo, checked: false }]);
    setNewTodo("");
    setId((prev) => prev + 1);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setMode(e.target.value);
  }
  function handleClear() {
    setData(data.filter((el) => el.checked !== true));
  }
  return (
    <>
      <div className="dotoapp">
        <h1>todos</h1>
        <div className="addTodo-container">
          <input
            placeholder="What needs to be done"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleApply}>Apply</button>
        </div>
        {data
          .filter((el) => {
            if (mode == "all") return el;
            if (mode == "active") return el.checked !== true;
            if (mode == "completed") return el.checked !== false;
          })
          .map((el) => (
            <TodoElement
              key={el.id}
              data={el}
              onSetData={setData}
              onData={data}
            />
          ))}
        <div className="footer">
          <span>
            {data.filter((el) => el.checked !== true).length} items left
          </span>

          <div className="form_radio_group">
            <div className="form_radio_group-item">
              <input
                id="all"
                onChange={handleChange}
                name="mode"
                value={"all"}
                type="radio"
              />
              <label htmlFor="all">All</label>
            </div>
            <div className="form_radio_group-item">
              <input
                id="active"
                onChange={handleChange}
                name="mode"
                value={"active"}
                type="radio"
              />
              <label htmlFor="active">Active</label>
            </div>

            <div className="form_radio_group-item">
              <input
                id="completed"
                onChange={handleChange}
                name="mode"
                value={"completed"}
                type="radio"
              />
              <label htmlFor="completed">Completed</label>
            </div>
          </div>
          <button onClick={handleClear}>Clear completed</button>
        </div>
      </div>
    </>
  );
}

export default App;
