export const initialState = {
    columns: [
      { id: "todo", title: "To Do", cards: [] },
      { id: "doing", title: "Doing", cards: [] },
      { id: "finished", title: "Finished", cards: [] },
    ],
    modalCard: null,
    modalType: null,
  };
  
  export function boardReducer(state, action) {
    switch (action.type) {
      case "OPEN_ADD_MODAL":
        return { ...state, modalType: "add", modalCard: { columnId: action.columnId, title: "" } };
      case "OPEN_EDIT_MODAL":
        return { ...state, modalType: "edit", modalCard: action.card };
      case "CLOSE_MODAL":
        return { ...state, modalCard: null, modalType: null };
      case "ADD_CARD":
        return {
          ...state,
          columns: state.columns.map((col) =>
            col.id === action.columnId
              ? { ...col, cards: [...col.cards, { id: Date.now().toString(), title: action.title }] }
              : col
          ),
        };
      case "SAVE_CARD":
        if (state.modalType === "add") {
          return boardReducer(state, { type: "ADD_CARD", columnId: state.modalCard.columnId, title: action.title });
        } else if (state.modalType === "edit") {
          return {
            ...state,
            columns: state.columns.map((col) => ({
              ...col,
              cards: col.cards.map((c) => (c.id === state.modalCard.id ? { ...c, title: action.title } : c)),
            })),
            modalCard: null,
            modalType: null,
          };
        }
        return state;
      case "DELETE_CARD":
        return {
          ...state,
          columns: state.columns.map((col) => ({
            ...col,
            cards: col.cards.filter((c) => c.id !== action.cardId),
          })),
          modalCard: null,
          modalType: null,
        };
      case "MOVE_CARD": {
        const { cardId, fromColumnId, direction } = action;
        const colIndex = state.columns.findIndex((col) => col.id === fromColumnId);
        if (colIndex === -1) return state;
  
        const card = state.columns[colIndex].cards.find((c) => c.id === cardId);
        if (!card) return state;
  
        return {
          ...state,
          columns: state.columns.map((col, idx) => {
            if (col.id === fromColumnId) {
              return { ...col, cards: col.cards.filter((c) => c.id !== cardId) };
            }
  
            const newIndex = direction === "left" ? colIndex - 1 : colIndex + 1;
            if (idx === newIndex) {
              return { ...col, cards: [...col.cards, card] };
            }
  
            return col;
          }),
        };
      }
      default:
        return state;
    }
  }
  