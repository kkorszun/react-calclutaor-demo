function Display(props) {
  const { isLeftSide, leftDisplay, rightDisplay } = props;

  const style = {
    width: "5.3125em",
    maxWidth: "5.3125em",
    borderRadius: "0.25em",
    backgroundColor: "white",
    fontSize: "2em",
    height: "1.75em",
    padding: "0.25em",
    direction: "rtl"
  };

  const displayFunction = (isLeftSide, leftDisplay, rightDisplay) => {
    if (!isLeftSide && rightDisplay !== "") return rightDisplay;
    return leftDisplay;
  };

  return (
    <p style={style}>
      {displayFunction(isLeftSide, leftDisplay, rightDisplay)}
    </p>
  );
}
