export default function Cell({ cell, row, col, isSelected, isPeer, onSelect }) {
  const classes = ['cell'];
  if (cell.given) classes.push('given');
  if (isPeer) classes.push('peer');
  if (isSelected) classes.push('selected');
  if (col % 3 === 2 && col !== 8) classes.push('box-right');
  if (row % 3 === 2 && row !== 8) classes.push('box-bottom');

  return (
    <div
      className={classes.join(' ')}
      role="gridcell"
      aria-selected={isSelected}
      onClick={onSelect}
    >
      {cell.value !== 0 ? cell.value : ''}
    </div>
  );
}