ReactDOM.render(
  <div
    className="ui middle aligned center aligned grid"
    style={{ height: "100%" }}
  >
    <div
      id="main-content"
      style={{ width: "unset" }}
      className="column compact"
    >
      <Calculator />
    </div>
  </div>,
  document.getElementById("root")
);
