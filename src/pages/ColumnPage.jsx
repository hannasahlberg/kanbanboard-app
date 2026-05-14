import { useBoard } from "../context/BoardContext";
import Column from "../components/Column";
import { useParams } from "react-router-dom";

export default function ColumnPage() {
  const { id } = useParams(); // t.ex. "todo", "doing", "finished"
  const { columns } = useBoard();

  const column = columns.find((col) => col.id === id);

  if (!column) return <p>Kolumnen finns inte</p>;

  return (
    <>
    <div className="min-h-screen flex justify-center items-center shadow-lg">
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4 bg-white p-4 rounded-lg mt-5">{column.title}</h1>
      <Column column={column} showAddButton={false} showArrows={false}/>
    </div>
    </div>
    </>
  );
}