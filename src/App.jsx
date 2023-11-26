import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleClick() {
    if (inputValue === "") return alert("Empty Input, enter what to do");
    setTodos((prevToDos) => [...prevToDos, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, prevTodoIndex) => {
        return prevTodoIndex != index;
      })
    );
  }
  const todo = todos.map((todo, index) => {
    return (
      <div
        className="flex bg-red-100 max-w-2xl justify-center mx-auto gap-4"
        key={index}
      >
        <p className="truncate">{todo}</p>
        <button
          className="rounded bg-red-500 px-5"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <main className="h-screen ">
      <section className="border border-red-950 max-w-2xl mx-auto my-16">
        <div className=" bg-red-300 flex max-w-2xl mx-auto my-auto justify-center items-center gap-4 py-5 mb-5 ">
          <input
            className="border-2 border-black "
            type="text"
            placeholder="Enter task todo"
            onChange={handleChange}
            value={inputValue}
          />
          <button className="rounded bg-blue-500 px-5" onClick={handleClick}>
            Add
          </button>
        </div>

        <div className=" space-y-5">{todo}</div>
      </section>
    </main>
  );
}

export default App;
