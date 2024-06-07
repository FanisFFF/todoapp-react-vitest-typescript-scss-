function AddToDo({ setData, setNewTodo, setId }) {
  function handleApply() {
    setData([...data, { id: id, text: newTodo, checked: false }]);
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
}
