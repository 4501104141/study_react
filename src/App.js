import { useStore, actions, useRef, useLayoutEffect, Storage } from "./store";

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput, editIndex, editInput } = state
  const inputRef = useRef()
  useLayoutEffect(() => {
    // khi component được mounted thì focus input
    inputRef.current.focus();
    // lưu lại mỗi lần todos thay đổi
    Storage.set(todos)
  }, [todos]);
  const handleAdd = () => {
    if (todoInput) {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
    }
    inputRef.current.focus();
  };
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
  };
  const handleDeleteAll = () => {
    dispatch(actions.deleteTodoAll());
    inputRef.current.focus();
  };
  const handleStartEdit = ({ todo, index }) => {
    console.log("nhan 2 lan roi");
    dispatch(actions.startEditTodo({ todo, index }));
  };
  return (
    <div style={{ padding: 32 }}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
        onKeyUp={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        style={{ margin: "0 8px", cursor: "pointer" }}
        onClick={handleAdd}
      >
        Add
      </button>
      <button style={{ cursor: "pointer" }} onClick={handleDeleteAll}>
        DeleteAll
      </button>
      {todos.map((todo, index) => (
        <li key={index} onDoubleClick={() => handleStartEdit({ todo, index })}>
          {editIndex === index ? (
            <input
              autoFocus
              value={editInput}
              onChange={(e) => dispatch(actions.editingTodo(e.target.value))}
              onBlur={() => dispatch(actions.endEditTodo({ editInput, index }))}
              onKeyUp={(e) =>
                e.key === "Enter" &&
                dispatch(actions.endEditTodo({ editInput, index }))
              }
            />
          ) : (
            <span>
              {todo}
              <i
                style={{
                  margin: "0 8px 0 24px",
                  cursor: "pointer"
                }}
                className="bx bx-pencil"
                onClick={() => handleStartEdit({ todo, index })}
              ></i>
              <i
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(index)}
                className="bx bxs-trash"
              ></i>
            </span>
          )}
        </li>
      ))}
    </div>
  );
}

export default App;
