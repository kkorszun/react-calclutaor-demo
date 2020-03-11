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

function PointButton(props){return(<button>.</button>);}

function ClearButton(props){return(<button onClick={props.onClick}>C</button>)}

function EqualButton(props){return(<button onClick={props.onClick}>=</button>)}

function Display(props) {
  const displaySide = (side) => (side === null) ? "" : side.toString(); 
  const toDisplay = props.state.isLeftSide ? props.state.leftSide : props.state.rightSide; 
  return(<p>{ displaySide(toDisplay) }</p>);
}

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      leftSide: props.value ? props.value : null, //NUMBER
      rightSide: null, //NUMBER
      isLeftSide: true, //BOOLEAN
      currentOpeartion: null
    };
    this.onNumberClick = this.onNumberClick.bind(this);
    this.onOperationClick = this.onOperationClick.bind(this);
    this.onEqualClick= this.onEqualClick.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  onNumberClick(e){
    const addNumber = (current, clicked) => current*10 + clicked;
    const clickedNumber = parseFloat(e.target.value);
    const toChange = this.state.isLeftSide ?  "leftSide" : "rightSide";
    if(!isNaN(clickedNumber)){
      this.setState({[toChange]: addNumber(this.state[toChange],clickedNumber)});
    }
  }

  onOperationClick(e,operation){
    if(!this.state.isLeftSide){
      this.onEqualClick();
    }
    this.setState({
      rightSide: null,
      currentOpeartion: operation,
      isLeftSide: false,
    });
  }

  onEqualClick(e){
    const currOperation = this.state.currentOpeartion;
    const operation = currOperation ? currOperation : (x,y) => 0;
    const result = operation(this.state.leftSide, this.state.rightSide);
    this.setState({
      leftSide: result,
      isLeftSide:true,
    });
  }

  clearState(){
    this.setState({
      leftSide: null,
      rightSide: null,
      currOperation: null,
      isLeftSide: null,
    });
  }

  

  render(){return(
    <div className="react-calculator">
      <table>
        <tbody>
        <tr>
          <td colSpan={3}><Display state={this.state}/></td>
          <td><ClearButton onClick={this.clearState}/></td>
        </tr>
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