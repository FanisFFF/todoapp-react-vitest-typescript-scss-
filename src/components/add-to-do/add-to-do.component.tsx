import { FC, useState } from "react";
import "./add-to-do.styles.scss";
import { TodoItem } from "../../types/TodoItem";

interface AddToDoProps {
  onData: TodoItem[];
  onSetData: (data: TodoItem[]) => void;
}

const AddToDo: FC<AddToDoProps> = ({ onData, onSetData }) => {
  const [id, setId] = useState(4);
  const [newTodo, setNewTodo] = useState("");

  function handleApply() {
    onSetData([...onData, { id: id, text: newTodo, checked: false }]);
    setNewTodo("");
    setId((prev) => prev + 1);
  }

  return (
    <div className="addTodo-container">
      <input
        placeholder="What needs to be done"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};
export default AddToDo;
