import { useBoard } from "../context/BoardContext";
import Column from "../components/Column";
import ModalWrapper from "../components/ModalWrapper";
import { Link } from "react-router-dom";


export default function BoardPage() {
  const { columns } = useBoard();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen gap-4">
      {columns.map(col => (
        <div key={col.id}>
          <div className="flex justify-between items-center mb-2 mt-3 rounded-lg bg-white p-4 shadow-lg">
            <div>
            <Link to={`/column/${col.id}`}>
            <h2 className="font-bold text-2xl text-black">{col.title}</h2>
            </Link>
          </div>
          </div>
          <Column column={col} showArrows={true}/>
        </div>
      ))}
      <ModalWrapper />
    </div>
  );
}