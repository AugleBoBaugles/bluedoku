import { createBoard, updateCell } from './sudoku';

export function initGame(puzzleEntry) {
  return {
    board: createBoard(puzzleEntry.puzzle),
    selected: null, // { row, col } or null
  };
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'SELECT_CELL':
      return { ...state, selected: { row: action.row, col: action.col } };

    case 'SET_VALUE': {
      if (!state.selected) return state;
      const { row, col } = state.selected;
      if (state.board[row][col].given) return state;
      return {
        ...state,
        board: updateCell(state.board, row, col, { value: action.value, notes: [] }),
      };
    }

    default:
      return state;
  }
}