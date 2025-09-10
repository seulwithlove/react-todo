import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

export type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
};

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
  const [todos, setTodos] = useState<Todo[]>(mockData);
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

  const onReorder = (dragIndex: number, hoverIndex: number) => {
    const draggedTodo = todos[dragIndex];
    const newTodos = [...todos];
    newTodos.splice(dragIndex, 1);
    newTodos.splice(hoverIndex, 0, draggedTodo);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="flex flex-col p-20 gap-10 w-50px m-auto">
        <Header />

        <section className="flex-1">
          <Editor onCreate={onCreate} />
        </section>

        <section className="flex-3">
          <List todos={todos} onReorder={onReorder} />
        </section>
      </div>
    </>
  );
}

export default App;
