import { useBoard } from '../context/BoardContext';
import Card from './Cards'


export default function Column({ column, showAddButton = true, showArrows= true
}) {
  const { dispatch } = useBoard();

  return (
    <div className="w-80 h-80 md:h-96 bg-gray-200/50 p-4 rounded-xl shadow-lg">
        
      <div className="flex flex-col gap-2 text-black">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} columnId={column.id} showArrows={showArrows}/>
        ))}
      </div>
      {showAddButton && column.id === "todo" && (
          <button
          onClick={() => dispatch({ type: "OPEN_ADD_MODAL", columnId: column.id })}
            className="px-3 py-1 bg-white text-black rounded-md p-5"
          >
            + Lägg till uppgift
          </button>
          )}
    </div>
  );
}
