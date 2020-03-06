function OperationButton(props){
  return(
    <button>{props.value}</button>
  );
}

function NumberButton(props){
  return(
  <button>{props.value}</button>
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

function Calculator(props){
  return(
    <div className="react-calculator">
      <table>
        <tbody>
        <tr><td colSpan={4}><Display value="0"/></td></tr>
        <tr>
          <td><NumberButton value={1}/></td>
          <td><NumberButton value={2}/></td>
          <td><NumberButton value={3}/></td>
          <td><OperationButton value="÷"/></td>
        </tr>
        <tr>
          <td><NumberButton value={4}/></td>
          <td><NumberButton value={5}/></td>
          <td><NumberButton value={6}/></td>
          <td><OperationButton value="×"/></td>
        </tr>
        <tr>
          <td><NumberButton value={7}/></td>
          <td><NumberButton value={8}/></td>
          <td><NumberButton value={9}/></td>
          <td><OperationButton value="-"/></td>
        </tr>
        <tr>
          <td><NumberButton value={0}/></td>
          <td><PointButton/></td>
          <td><EqualButton/></td>
          <td><OperationButton value="+"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}


ReactDOM.render(
    <Calculator/>, 
    document.getElementById('root')
  );