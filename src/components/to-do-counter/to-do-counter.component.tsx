function ToDoCounter({ onData }) {
  return (
    <span>{onData.filter((el) => el.checked !== true).length} items left</span>
  );
}
export default ToDoCounter;
