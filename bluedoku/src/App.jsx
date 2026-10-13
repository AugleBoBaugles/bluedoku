import { useReducer } from 'react';
import puzzles from './puzzles.json';
import { gameReducer, initGame } from './gameReducer';
import Board from './components/Board';
import NumberPad from './components/NumberPad';

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, puzzles[0], initGame);

  const { selected, board } = state;
  const canEdit = selected !== null && !board[selected.row][selected.col].given;

  return (
    <main className="app">
      <h1>bluedoku</h1>
      <Board board={board} selected={selected} dispatch={dispatch} />
      <NumberPad dispatch={dispatch} disabled={!canEdit} />
    </main>
  );
}