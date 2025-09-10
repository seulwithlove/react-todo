import { useState } from "react";

export default function TodoItem({
  id,
  isDone,
  content,
  date,
  index,
  onReorder,
}: {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
  index: number;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.dataTransfer.setData("text/plain", index.toString());
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
    onReorder(dragIndex, index);
    setIsDragging(false);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div
      className={`flex items-center p-3 gap-3 rounded-lg mb-2 cursor-move transition-all ${
        isDragging
          ? "opacity-50 scale-95 bg-gray-500"
          : "hover:bg-gray-700 hover:shadow-md"
      }`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <div className="text-gray-400">⋮⋮</div>
      <input type="checkbox" checked={isDone} />
      <div className="flex-1">{content}</div>
      <div className="text-gray-500 text-sm">
        {new Date(date).toLocaleDateString()}
      </div>
      <button className="border border-indigo-500 px-2 py-2 rounded-md cursor-pointer">
        Delete
      </button>
    </div>
  );
}
