function Display(props) {
  const { isLeftSide, leftDisplay, rightDisplay } = props;

  const displayFunction = (isLeftSide, leftDisplay, rightDisplay) => {
    if (!isLeftSide && rightDisplay !== "") return rightDisplay;
    return leftDisplay;
  };

  return <p>{displayFunction(isLeftSide, leftDisplay, rightDisplay)}</p>;
}
