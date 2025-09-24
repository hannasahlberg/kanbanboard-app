export default function TaskForm({ modalType, title, setTitle, onSave, onDelete, onCancel }) {
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">
          {modalType === "add" ? "Ny uppgift" : "Redigera uppgift"}
        </h2>
  
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
  
        <div className="flex justify-between">
          {modalType === "edit" && (
            <button
              onClick={onDelete}
              className="text-red-500"
            >
              🗑 Ta bort
            </button>
          )}
          <div className="flex gap-2">
            <button onClick={onCancel} className="px-3 py-1 border rounded">Avbryt</button>
            <button onClick={onSave} className="px-3 py-1 bg-blue-500 text-black rounded">Spara</button>
          </div>
        </div>
      </div>
    );
  }