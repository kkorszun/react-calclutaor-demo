class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftDisplay: props.value ? props.value.toString() : "", //STRING
      rightDisplay: "", //STRING
      isLeftSide: true, //BOOLEAN
      currentOpeartion: null
    };
  }

  onNumberClick = e => {
    const clickedNumber = parseFloat(e.target.value);
    const [disState, side] = this.state.isLeftSide
      ? [this.state.leftDisplay, "leftDisplay"]
      : [this.state.rightDisplay, "rightDisplay"];
    if (!isNaN(clickedNumber)) {
      const newDisplayValue = disState + "" + clickedNumber;
      this.setState({ [side]: newDisplayValue });
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
        leftDisplay: result.toString(),
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
    const isLeftSide = this.state.isLeftSide;
    const rightDisplay = this.state.rightDisplay;
    const leftDisplay = this.state.leftDisplay;
    const commonProps = { isLeftSide, leftDisplay, rightDisplay };
    return (
      <div className="react-calculator ui  segment compact">
        <table>
          <tbody>
            <tr>
              <td colSpan={3}>
                <Display {...commonProps} />
              </td>
              <td>
                <ClearButton onClick={this.clearState} />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton value={1} onClick={this.onNumberClick} />
              </td>
              <td>
                <NumberButton value={2} onClick={this.onNumberClick} />
              </td>
              <td>
                <NumberButton value={3} onClick={this.onNumberClick} />
              </td>
              <td>
                <OperationButton
                  value="÷"
                  onClick={this.onOperationClick}
                  operation={(x, y) => x / y}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton value={4} onClick={this.onNumberClick} />
              </td>
              <td>
                <NumberButton value={5} onClick={this.onNumberClick} />
              </td>
              <td>
                <NumberButton value={6} onClick={this.onNumberClick} />
              </td>
              <td>
                <OperationButton
                  value="×"
                  onClick={this.onOperationClick}
                  operation={(x, y) => x * y}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton value={7} onClick={this.onNumberClick} />
              </td>
              <td>
                <NumberButton value={8} onClick={this.onNumberClick} />
              </td>
              <td>
                <NumberButton value={9} onClick={this.onNumberClick} />
              </td>
              <td>
                <OperationButton
                  onClick={this.onOperationClick}
                  value="-"
                  operation={(x, y) => x - y}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton value={0} onClick={this.onNumberClick} />
              </td>
              <td>
                <PointButton onClick={this.onPointClick} />
              </td>
              <td>
                <EqualButton onClick={this.onEqualClick} />
              </td>
              <td>
                <OperationButton
                  onClick={this.onOperationClick}
                  value="+"
                  operation={(x, y) => x + y}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
