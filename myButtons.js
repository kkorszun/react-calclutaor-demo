function OperationButton(props) {
  return (
    <button
      className="circular ui orange icon button"
      value={props.value}
      onClick={e => props.onClick(e, props.operation)}
    >
      {props.value}
    </button>
  );
}

function NumberButton(props) {
  return (
    <button
      className="circular ui yellow icon button"
      value={props.value}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function PointButton(props) {
  return (
    <button className="circular ui grey icon button" onClick={props.onClick}>
      .
    </button>
  );
}

function ClearButton(props) {
  return (
    <button className="circular ui red icon button" onClick={props.onClick}>
      C
    </button>
  );
}

function EqualButton(props) {
  return (
    <button className="circular ui blue icon button" onClick={props.onClick}>
      =
    </button>
  );
}
