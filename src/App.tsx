import { useRef, useState } from "react";

const mockData = [
  {
    id: 0,
    content: "Swim",
    isDone: false,
  },
  {
    id: 1,
    content: "Study",
    isDone: false,
  },
];
export default function App() {
  // 전체 투두 상태 관리
  const [todos, setTodos] = useState(mockData);

  // input으로 입력받은 투두 관리
  const [content, setContent] = useState("");

  const idRef = useRef(2);

  // input창
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // 투두 생성
  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  // 추가 버튼을 누르면 setTodo에 새로운 투두 추가
  const onSubmit = () => {
    onCreate(content);
    setContent("");
  };

  // 삭제 버튼을 누르면 todo 리스트에서 필터링
  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="flex flex-col items-center justify-center h-100">
      <div className="">
        <input
          onChange={onChangeContent}
          value={content}
          placeholder="what r u doing?"
        />
        <button onClick={onSubmit} className="bg-blue-600 w-10">
          +
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="flex gap-10">
            {todo.content}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
