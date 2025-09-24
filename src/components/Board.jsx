import Column from "./Column";

export default function Board({ columns }) {
  return (
    <div className="flex gap-4 p-4">
      {columns.map((col) => (
        <Column key={col.id} column={col} />
      ))}
    </div>
  );
}