
import { createContext, useContext, useReducer } from "react";
import { boardReducer, initialState } from './BoardReducer'

const BoardContext = createContext(null);

export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  const value = {
    columns: state.columns,
    modalCard: state.modalCard,
    modalType: state.modalType,
    dispatch,
  };

  return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
}

export const useBoard = () => useContext(BoardContext);
