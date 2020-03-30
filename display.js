function Display(props) {
  const { isLeftSide, leftDisplay, rightDisplay } = props;

  const style = {
    fontSize: "200%",
    height: "1.3em",

    paddingRight: "0.1em",
    direction: "rtl",
    width: "5.3125em",
    maxWidth: "5.3125em",
    borderRadius: "0.1em",

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
