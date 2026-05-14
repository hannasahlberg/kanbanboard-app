import { useBoard } from "../context/BoardContext";


export default function Card({ card, columnId, showArrows = true}) {
    const { dispatch } = useBoard();
    return (
          <div 
          onClick={() => dispatch({ type: "OPEN_EDIT_MODAL", card })}
          className=" shadow-lg flex justify-between items-center text-xl p-2 bg-white rounded-lg mb-2 cursor-pointer "
        >
        
            {card.title}
            {showArrows &&(
              <div className="flex ">
              <button className="w-10 h-10 justify-center items-center flex  text-black"  onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MOVE_CARD", cardId: card.id, fromColumnId: columnId, direction: "left" });
            }}>←</button>
              <button className="w-10 h-10 justify-center items-center flex text-black" onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MOVE_CARD", cardId: card.id, fromColumnId: columnId, direction: "right" }); }}> → </button>
          
          </div>

            )}
            
          </div>
    );
  }
  