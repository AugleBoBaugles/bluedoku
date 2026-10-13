import Cell from './Cell';
import { isPeer } from '../sudoku';

export default function Board({ board, selected, dispatch }) {
  return (
    <div className="board" role="grid" aria-label="Sudoku board">
      {board.map((row, r) =>
        row.map((cell, c) => (
          <Cell
            key={`${r}-${c}`}
            cell={cell}
            row={r}
            col={c}
            isSelected={selected?.row === r && selected?.col === c}
            isPeer={isPeer(selected, r, c)}
            onSelect={() => dispatch({ type: 'SELECT_CELL', row: r, col: c })}
          />
        ))
      )}
    </div>
  );
}