const MyCircularButton = props => {
  const { onClick, value } = props;
  return (
    <button {...props} style={{ width: "2.5em" }}>
      {props.value}
    </button>
  );
};

function OperationButton(props) {
  return (
    <MyCircularButton
      className="ui circular orange icon button huge"
      value={props.value}
      onClick={e => props.onClick(e, props.operation)}
    />
  );
}

function NumberButton(props) {
  return (
    <MyCircularButton
      className="ui circular yellow icon button huge"
      value={props.value}
      onClick={props.onClick}
    />
  );
}

function PointButton(props) {
  return (
    <MyCircularButton
      className="ui circular grey icon button huge"
      value="."
      onClick={props.onClick}
    />
  );
}

function ClearButton(props) {
  return (
    <MyCircularButton
      className="ui circular red icon button huge"
      value="C"
      onClick={props.onClick}
    />
  );
}

function EqualButton(props) {
  return (
    <MyCircularButton
      className="ui circular blue icon button huge"
      value="="
      onClick={props.onClick}
    />
  );
}
