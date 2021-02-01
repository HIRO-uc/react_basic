import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    // reactでcssを書く場合はキャメルケースで書く　×font-size
    fontSize: "18px"
  };
  return (
    // <React.Fragment>は<>と省略できる
    // reactのなかでjavascriptを記述するためには{}でくくる
    // styleを直接指定するときは　{{}} でくくる。
    // 外側はjavascriptを記述するための括弧。内側はjavascriptのオブジェクトの括弧
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

// 他のファイルでもこのファイルとしてAppという関数を使用できるようにする
export default App;
