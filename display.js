function Display(props) {
  const { isLeftSide, leftDisplay, rightDisplay } = props;

  const displayFunction = (isLeftSide, leftDisplay, rightDisplay) => {
    if (!isLeftSide && rightDisplay !== "") return rightDisplay;
    return leftDisplay;
  };

  return (
    <p
      style={{
        borderRadius: "0.5em",
        backgroundColor: "white",
        fontSize: "2em",
        height: "1.75em",
        padding: "0.25em"
      }}
    >
      {displayFunction(isLeftSide, leftDisplay, rightDisplay)}
    </p>
  );
}
