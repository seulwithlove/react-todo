// import { useRef, useState } from "react";

// export default function Editor({
//   onCreate,
// }: {
//   onCreate: (content: string) => void;
// }) {
//   const [content, setContent] = useState("");
//   const contentRef = useRef<HTMLInputElement>(null);
//   const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setContent(e.target.value);
//   };

//   const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       onSubmit();
//     }
//   };
//   const onSubmit = () => {
//     if (content === "") {
//       contentRef.current?.focus();
//       return;
//     }
//     onCreate(content);
//     setContent("");
//   };

//   return (
//     <div className="flex justify-between gap-10">
//       <input
//         ref={contentRef}
//         value={content}
//         onKeyDown={onKeydown}
//         onChange={onChangeContent}
//         className="border-b flex-1 border-amber-300"
//         placeholder="what to do?"
//       />
//       <button
//         onClick={onSubmit}
//         className="border border-indigo-500 px-4 py-2 rounded-md">
//         ✨
//       </button>
//     </div>
//   );
// }
