function OperationButton(props){
  return(
    <button value={props.value} onClick={(e)=>props.onClick(e,props.operation)}>{props.value}</button>
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
    <button onClick={props.onClick}>=</button>
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
      currentOpeartion: null
    };
    this.onNumberClick = this.onNumberClick.bind(this);
    this.onOperationClick = this.onOperationClick.bind(this);
    this.onEqualClick= this.onEqualClick.bind(this);
  }

  onNumberClick(e){
    let newState = this.state.displayState+e.target.value.toString();
    if(this.state.displayState == "0") {
      newState =  e.target.value.toString();
    }
    this.setState({displayState: newState})
  }

 

  onOperationClick(e,operation){
    const parsedDisplay = parseFloat(this.state.displayState);
    const newLeftSide =  parsedDisplay ? parsedDisplay : 0;
    this.setState({
      displayState:"0",
      rightSide: 0,
      leftSide: newLeftSide,
      currentOpeartion: operation,
      isLeftSide: false,
    });
  }

  onEqualClick(e){
    const parsedDisplay = parseFloat(this.state.displayState);
    const newRightSide =  parsedDisplay ? parsedDisplay : 0;
    const currOperation = this.state.currentOpeartion;
    const operation = currOperation ? currOperation : (x,y) => 0;
    const result = operation(this.state.leftSide, newRightSide);
    this.setState({
      leftSide: result,
      rightSide: newRightSide,
      isLeftSide:true,
      displayState:result.toString()
    });
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
          <td><OperationButton value="÷" onClick={this.onOperationClick} operation={(x,y)=> x/y}/></td>
        </tr>
        <tr>
          <td><NumberButton value={4} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={5} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={6} onClick={this.onNumberClick}/></td>
          <td><OperationButton value="×" onClick={this.onOperationClick} operation={(x,y)=> x*y}/></td>
        </tr>
        <tr>
          <td><NumberButton value={7} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={8} onClick={this.onNumberClick}/></td>
          <td><NumberButton value={9} onClick={this.onNumberClick}/></td>
          <td><OperationButton onClick={this.onOperationClick} value="-" operation={(x,y)=> x-y}/></td>
        </tr>
        <tr>
          <td><NumberButton value={0} onClick={this.onNumberClick}/></td>
          <td><PointButton/></td>
          <td><EqualButton onClick={this.onEqualClick}/></td>
          <td><OperationButton onClick={this.onOperationClick} value="+" operation={(x,y)=> x+y}/></td>
        </tr>
        </tbody>
      </table>
    </div>);}
}


ReactDOM.render(
    <Calculator/>, 
    document.getElementById('root')
  );