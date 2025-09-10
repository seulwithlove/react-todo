import type { Todo } from "../App";
import TodoItem from "./TodoItem";

export default function List({
  todos,
  onReorder,
}: {
  todos: Todo[];
  onReorder: (dragIndex: number, hoverIndex: number) => void;
}) {
  return (
    <div className="flex flex-col items-center w-100% m-auto gap-2 ">
      <div className="text-indigo-700 text-2xl font-bold place-items-center">
        *
      </div>
      <div className="flex flex-col w-full">
        {todos.map((todo, index: number) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              index={index}
              onReorder={onReorder}
            />
          );
        })}
      </div>
    </div>
  );
}
