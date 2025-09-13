import { useRef, useState } from "react";

// 👉 초기 데이터 (앱 시작 시 기본으로 보여줄 todo들)
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
  // 👉 전체 todo 리스트 상태
  // todos : 현재 할 일 배열
  // setTodos : todos를 업데이트하는 함수
  const [todos, setTodos] = useState(mockData);

  // 👉 입력창에 적은 "새로운 할 일"을 관리하는 상태
  const [content, setContent] = useState("");

  // 👉 새로운 todo가 추가될 때마다 idRef.current 값을 1씩 증가시켜 고유 id 부여
  // useRef를 쓰면 컴포넌트가 리렌더링되어도 값이 유지됨
  const idRef = useRef(2);

  // 👉 input 창에 글자를 입력할 때마다 content 상태를 갱신
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // 👉 새로운 todo 객체를 생성해 todos에 추가
  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      isDone: false,
    };
    // 이전 todos를 유지하면서 새로운 todo를 맨 앞에 추가
    setTodos((prev) => [newTodo, ...prev]);
  };

  // 👉 "추가" 버튼을 눌렀을 때 실행되는 함수
  const onSubmit = () => {
    onCreate(content);
  };

  // 👉 todo 체크박스 상태 반영
  const onChangeChecked = (id: number) => {
    onUpdate(id);
  };

  // 👉 특정 todo를 삭제하는 함수 : 상태를 관리
  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  // 👉 특정 todo를 체크하는 함수 : 상태를 관리
  const onUpdate = (targetId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 👉 JSX (화면 렌더링)
  return (
    <div className="flex flex-col justify-center items-center  h-svh">
      <div className=" flex gap-10">
        <input
          placeholder="What to do?"
          type="text"
          value={content}
          onChange={onChangeContent}
        />
        <button onClick={onSubmit}>Add</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-10">
          <input
            type="checkbox"
            onChange={() => onChangeChecked(todo.id)}
            checked={todo.isDone}
          />
          <div>{todo.content}</div>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
