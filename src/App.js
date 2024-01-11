import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }
  const handleDelete = () => {
    dispatch(actions.deleteTodo(todoInput))
  }
  return (
    <div style={{ padding: 32 }}>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}<span onClick={handleDelete}>X</span></li>
      ))}
    </div>
  );
}

export default App;
