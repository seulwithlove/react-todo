// import type { Todo } from "../App";
// import TodoItem from "./TodoItem";

// export default function List({
//   todos,
//   onUpdate,
//   onDelete,
//   onReorder,
// }: {
//   todos: Todo[];
//   onUpdate: (targetId: number) => void;
//   onDelete: (targetId: number) => void;
//   onReorder: (dragIndex: number, hoverIndex: number) => void;
// }) {
//   return (
//     <div className="flex flex-col items-center w-100% m-auto gap-2 ">
//       <div className="text-indigo-700 text-2xl font-bold place-items-center">
//         *
//       </div>
//       <div className="flex flex-col w-full">
//         {todos.map((todo, index: number) => {
//           return (
//             <TodoItem
//               key={todo.id}
//               {...todo}
//               index={index}
//               onUpdate={onUpdate}
//               onDelete={onDelete}
//               onReorder={onReorder}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
