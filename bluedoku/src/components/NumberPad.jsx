export default function NumberPad({ dispatch, disabled }) {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="pad">
      {digits.map((n) => (
        <button
          key={n}
          className="pad-btn"
          disabled={disabled}
          onClick={() => dispatch({ type: 'SET_VALUE', value: n })}
        >
          {n}
        </button>
      ))}
      <button
        className="pad-btn"
        disabled={disabled}
        aria-label="Erase"
        onClick={() => dispatch({ type: 'SET_VALUE', value: 0 })}
      >
        ⌫
      </button>
    </div>
  );
}