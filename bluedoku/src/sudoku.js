export function createBoard(puzzle) {
  return puzzle.map((row) =>
    row.map((n) => ({ value: n, given: n !== 0, notes: [] }))
  );
}

export function isPeer(selected, row, col) {
  if (!selected) return false;
  const sameRow = selected.row === row;
  const sameCol = selected.col === col;
  const sameBox =
    Math.floor(selected.row / 3) === Math.floor(row / 3) &&
    Math.floor(selected.col / 3) === Math.floor(col / 3);
  return sameRow || sameCol || sameBox;
}

export function updateCell(board, row, col, changes) {
  return board.map((r, ri) =>
    ri === row
      ? r.map((cell, ci) => (ci === col ? { ...cell, ...changes } : cell))
      : r
  );
}