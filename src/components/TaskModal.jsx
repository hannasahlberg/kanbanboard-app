export default function TaskModal({ children, closeModal }) {
    if (!children) return null;
  
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black/50"
        onClick={closeModal} 
      >
        <div 
          className="bg-white p-6 rounded-xl w-96"
          onClick={e => e.stopPropagation()} 
        >
          {children}
        </div>
      </div>
    );
  }