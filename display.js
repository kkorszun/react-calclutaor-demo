function Display(props) {
  const { isLeftSide, leftDisplay, rightDisplay } = props;

  const style = {
    fontSize: "175%",
    height: "1.4em",

    paddingRight: "0.15em",
    direction: "rtl",
    width: "7em",
    maxWidth: "7em",
    borderRadius: "0.1em",
    marginRight: "0.15em",
    backgroundColor: "white"
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
