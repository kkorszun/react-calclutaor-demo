function OperationButton(props){
  return(
    <button>{props.value}</button>
  );
}

function NumberButton(props){
  return(
  <button value={props.value} onClick={props.onClick}>{props.value}</button>
  );
}

function PointButton(props){
  return(
    <button>.</button>
  );
}

function EqualButton(props){
  return(
    <button>=</button>
  )
}

function Display(props) {
  return(<p>{ props.value }</p>)
}

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      leftSide: props.value ? props.value : 0,
      rightSide: 0,
      isLeftSide: true,
      displayState: props.value ? props.value.toString() : "0",
    };
    this.onNumberClick = this.onNumberClick.bind(this);
  }

  onNumberClick(e){
    let newState = this.state.displayState+e.target.value.toString();
    if(this.state.displayState == "0") {
      newState =  e.target.value.toString();
    }
    this.setState({displayState: newState})
  }

  render(){return(
    <div className="react-calculator">
      <table>
        <tbody>
        <tr><td colSpan={4}><Display value={this.state.displayState}/></td></tr>
        <tr>
          <td><NumberButton value={1} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={2} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={3} onClick={this.onNumberClick}/></td>
          <td><OperationButton value="÷"/></td>
        </tr>
        <tr>
          <td><NumberButton value={4} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={5} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={6} onClick={this.onNumberClick}/></td>
          <td><OperationButton value="×"/></td>
        </tr>
        <tr>
          <td><NumberButton value={7} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={8} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={9} onClick={this.onNumberClick}/></td>
          <td><OperationButton value="-"/></td>
        </tr>
        <tr>
          <td><NumberButton value={0} onClick={this.onNumberClick}/></td>
          <td><PointButton/></td>
          <td><EqualButton/></td>
          <td><OperationButton value="+"/></td>
        </tr>
        </tbody>
      </table>
    </div>);}
}


ReactDOM.render(
    <Calculator/>, 
    document.getElementById('root')
  );