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

function PointButton(props){return(<button onClick={props.onClick}>.</button>);}

function ClearButton(props){return(<button onClick={props.onClick}>C</button>)}

function EqualButton(props){return(<button onClick={props.onClick}>=</button>)}

function Display(props) {
  return(<p>{ props.value }</p>);
}

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      leftSide: props.value ? props.value : null, //NUMBER
      rightSide: null, //NUMBER
      isLeftSide: true, //BOOLEAN
      currentOpeartion: null,
      displayState: props.value ? props.value.toString() : ""
    };
    this.onNumberClick = this.onNumberClick.bind(this);
    this.onOperationClick = this.onOperationClick.bind(this);
    this.onEqualClick= this.onEqualClick.bind(this);
    this.clearState = this.clearState.bind(this);
    this.onPointClick = this.onPointClick.bind(this);
  }

  onNumberClick(e){   
    const clickedNumber = parseFloat(e.target.value);
    if(!isNaN(clickedNumber)){
      const disState = this.state.displayState 
      const disVal = disState === '0' ? '' : disState;
      const newDisplayValue =  disVal + "" + clickedNumber;
      this.setState({displayState: newDisplayValue.toString()});
    }
  }

  onOperationClick(e,operation){
    const disValue = parseFloat(this.state.displayState);
    if(!isNaN(disValue)) {
      if(this.state.isLeftSide) {
        this.setState({leftSide: disValue});
      } else{
        this.onEqualClick();
      }
      this.setState({
        displayState: '',
        rightSide: null,
        currentOpeartion: operation,
        isLeftSide: false,
      });
    }
    
  }

  onEqualClick(e){
    const currOperation = this.state.currentOpeartion;
    const operation = currOperation ? currOperation : (x,y) => 0;
    const rightSide = parseFloat(this.state.displayState);
    if(!isNaN(rightSide)) {
      const result = operation(this.state.leftSide, rightSide);
      this.setState({
        leftSide: result,
        displayState: result.toString(),
        isLeftSide:true,
      });
    }
  }

  clearState(){
    this.setState({
      leftSide: null,
      rightSide: null,
      currOperation: null,
      isLeftSide: true,
      displayState: "",
    });
  }

  onPointClick(){
    const disState = this.state.displayState;
    if(!disState.includes('.')) {
      this.setState(
        {displayState: disState+'.'}
      )
    }
  }
  

  render(){return(
    <div className="react-calculator">
      <table>
        <tbody>
        <tr>
          <td colSpan={3}><Display value={this.state.displayState}/></td>
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
          <td><PointButton onClick={this.onPointClick}/></td>
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