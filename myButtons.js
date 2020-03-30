const MyCircularButton = props => {
  const { onClick, value } = props;
  return (
    <button
      {...props}
      style={{ width: "2.5em" }}
      className={`ui circular ${props.color} icon button huge `}
    >
      {props.value}
    </button>
  );
};

function OperationButton(props) {
  return (
    <MyCircularButton
      color="orange "
      value={props.value}
      onClick={e => props.onClick(e, props.operation)}
    />
  );
}

const NumberButton = props => <MyCircularButton {...props} color="yellow" />;
const PointButton = props => (
  <MyCircularButton value="." color="grey" {...props} />
);
const ClearButton = props => (
  <MyCircularButton color="red" value="C" {...props} />
);
const EqualButton = props => (
  <MyCircularButton value="=" color="blue" {...props} />
);
