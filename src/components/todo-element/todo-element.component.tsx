import { FC } from "react";
import { TodoItem } from "../..//types/TodoItem";
import "./todo-element.styles.scss";
interface TodoItemProps {
  data: TodoItem;
  onSetData: (data: TodoItem[]) => void;
  onData: TodoItem[];
}

const TodoElement: FC<TodoItemProps> = ({ data, onSetData, onData }) => {
  const { text, checked, id } = data;
  function handleChange(id: number) {
    onSetData(
      onData.map((el) => {
        if (el.id == id)
          return {
            ...el,
            checked: !el.checked,
          };
        else return el;
      })
    );
  }
  return (
    <div className="todo-element">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChange(id)}
        name={text}
        id={String(id)}
      />
      <p style={{ textDecoration: checked ? "line-through" : "" }}>{text}</p>
    </div>
  );
};
export default TodoElement;
