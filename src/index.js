import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // <React.Fragment>は<>と省略できる
    <React.Fragment>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
