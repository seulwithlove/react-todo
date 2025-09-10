import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import TodoList from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "Study React!",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Study Next.js!",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Swim!",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="flex flex-col p-5 gap-3 w-full h-svh border border-amber-300">
      <Header />

      <section className="flex-1">
        <Editor onCreate={onCreate} />
      </section>

      <section className="flex-3">
        <TodoList />
      </section>
    </div>
  );
}

export default App;
