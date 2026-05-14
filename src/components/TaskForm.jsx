export default function TaskForm({ modalType, title, setTitle, onSave, onDelete, onCancel }) {
    return (
      <div>
        <h2 className="text-lg  mb-4 text-black">
          {modalType === "add" ? "Ny uppgift" : "Redigera uppgift"}
        </h2>
  
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border border-black rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        />
  
        <div className="flex justify-between">
          {modalType === "edit" && (
            <button
              onClick={onDelete}
              className="text-black"
            >
              🗑 Ta bort
            </button>
          )}
          <div className="flex gap-2">
            <button onClick={onCancel} className="px-3 py-1 border rounded text-black ">Avbryt</button>
            <button onClick={onSave} className="px-3 py-1 bg-purple-200 text-black rounded">Spara</button>
          </div>
        </div>
      </div>
    );
  }