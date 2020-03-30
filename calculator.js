class Calculator extends React.Component {
  state = {
    leftDisplay: this.props.value ? this.props.value.toString() : "", //STRING
    rightDisplay: "", //STRING
    isLeftSide: true, //BOOLEAN
    currentOpeartion: null,
    lenghtLimit: 12
  };

  onNumberClick = e => {
    const clickedNumber = parseFloat(e.target.value);
    const [disState, side] = this.state.isLeftSide
      ? [this.state.leftDisplay, "leftDisplay"]
      : [this.state.rightDisplay, "rightDisplay"];
    if (!isNaN(clickedNumber)) {
      const newDisplayValue = disState + "" + clickedNumber;
      if (newDisplayValue.length < this.state.lenghtLimit) {
        this.setState({ [side]: newDisplayValue });
      }
    }
  };

  onOperationClick = (e, operation) => {
    if (!this.state.isLeftSide) {
      this.onEqualClick();
    }
    this.setState({
      rightDisplay: "",
      currentOpeartion: operation,
      isLeftSide: false
    });
  };

  onEqualClick = e => {
    const currOperation = this.state.currentOpeartion;
    const operation = currOperation || ((x, y) => 0);
    let leftSide = parseFloat(this.state.leftDisplay) || 0;
    const rightSide = parseFloat(this.state.rightDisplay) || 0;
    if (!isNaN(rightSide)) {
      const result = operation(leftSide, rightSide);
      this.setState({
        leftDisplay: displayFormat(result, this.state.lenghtLimit),
        isLeftSide: true
      });
    }
  };

  clearState = () => {
    this.setState({
      leftDisplay: "",
      rightDisplay: "",
      currOperation: null,
      isLeftSide: true
    });
  };

  onPointClick = () => {
    const [disState, side] = this.state.isLeftSide
      ? [this.state.leftDisplay, "leftDisplay"]
      : [this.state.rightDisplay, "rightDisplay"];
    if (!disState.includes(".")) {
      const newDisState = disState == "" ? "0" : disState;
      this.setState({ [side]: newDisState + "." });
    }
  };

  render() {
    const style = {
      borderRadius: "0.5em",
      padding: "0.5em",
      backgroundColor: "darkgray"
    };

    const isLeftSide = this.state.isLeftSide;
    const rightDisplay = this.state.rightDisplay;
    const leftDisplay = this.state.leftDisplay;
    const commonProps = { isLeftSide, leftDisplay, rightDisplay };

    return (
      <div id="react-calculator" style={style} className="ui  segment compact">
        <CalcKeyboard
          displayComponent={<Display {...commonProps} />}
          clearState={this.clearState}
          onNumberClick={this.onNumberClick}
          onOperationClick={this.onOperationClick}
          onPointClick={this.onPointClick}
          onEqualClick={this.onEqualClick}
        />
      </div>
    );
  }
}
