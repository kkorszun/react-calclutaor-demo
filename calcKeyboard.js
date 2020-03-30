const TRow = ({ children }) => (
  <tr>
    {children.map(x => (
      <td key={x.key}>{x}</td>
    ))}
  </tr>
);

const CalcKeyboard = ({
  displayComponent,
  clearState,
  onNumberClick,
  onOperationClick,
  onPointClick,
  onEqualClick
}) => (
  <table>
    <tbody>
      <tr>
        <td colSpan={3}>{displayComponent}</td>
        <td>
          <ClearButton onClick={clearState} />
        </td>
      </tr>
      <TRow>
        <NumberButton key="1" value={1} onClick={onNumberClick} />
        <NumberButton key="2" value={2} onClick={onNumberClick} />
        <NumberButton key="3" value={3} onClick={onNumberClick} />
        <DivButton key="div" onClick={onOperationClick} />
      </TRow>
      <TRow>
        <NumberButton key="4" value={4} onClick={onNumberClick} />
        <NumberButton key="5" value={5} onClick={onNumberClick} />
        <NumberButton key="6" value={6} onClick={onNumberClick} />
        <MultiButton key="mlt" onClick={onOperationClick} />
      </TRow>
      <TRow>
        <NumberButton key="7" value={7} onClick={onNumberClick} />
        <NumberButton key="8" value={8} onClick={onNumberClick} />
        <NumberButton key="9" value={9} onClick={onNumberClick} />
        <MinusButton key="min" onClick={onOperationClick} />
      </TRow>
      <TRow>
        <NumberButton key="0" value={0} onClick={onNumberClick} />
        <PointButton key="ptn" onClick={onPointClick} />
        <EqualButton key="eql" onClick={onEqualClick} />
        <AddButton key="add" onClick={onOperationClick} />
      </TRow>
    </tbody>
  </table>
);
