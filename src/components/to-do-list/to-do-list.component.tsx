import { FC } from "react";
import { TodoItem } from "../../types/TodoItem";
import TodoElement from "../todo-element/todo-element.component";

interface ToDoListProps {
  onData: TodoItem[];
  onMode: string;
  onSetData: (data: TodoItem[]) => void;
}

const ToDoList: FC<ToDoListProps> = ({ onData, onMode, onSetData }) => {
  return onData
    .filter((el) => {
      if (onMode == "all") return el;
      if (onMode == "active") return el.checked !== true;
      if (onMode == "completed") return el.checked !== false;
    })
    .map((el) => (
      <TodoElement
        key={el.id}
        data={el}
        onSetData={onSetData}
        onData={onData}
      />
    ));
};
export default ToDoList;
