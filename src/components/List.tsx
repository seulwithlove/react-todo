import type { Todo } from "../App";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return <div>{todo.content}</div>;
      })}
    </div>
  );
}
