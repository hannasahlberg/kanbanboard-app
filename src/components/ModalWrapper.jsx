import { useState, useEffect } from "react";
import { useBoard } from "../context/BoardContext";
import TaskModal from "./TaskModal";
import TaskForm from "./TaskForm";

export default function ModalWrapper() {
  const { modalCard, modalType, dispatch } = useBoard();
  const [title, setTitle] = useState("");

  // Sätt initial titel när modal öppnas
  useEffect(() => {
    if (modalCard) setTitle(modalCard.title || "");
  }, [modalCard]);

  if (!modalCard) return null; // inget att visa

  const handleSave = () => {
    dispatch({ type: "SAVE_CARD", title });
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_CARD", cardId: modalCard.id });
  };

  const handleCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <TaskModal closeModal={handleCancel}>
      <TaskForm
        modalType={modalType}
        title={title}
        setTitle={setTitle}
        onSave={handleSave}
        onDelete={handleDelete}
        onCancel={handleCancel}
      />
    </TaskModal>
  );
}