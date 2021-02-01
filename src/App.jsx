import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    // <React.Fragment>は<>と省略できる
    // reactのなかでjavascriptを記述するためには{}でくくる
    // styleを直接指定するときは　{{}} でくくる。
    // 外側はjavascriptを記述するための括弧。内側はjavascriptのオブジェクトの括弧
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

// 他のファイルでもこのファイルとしてAppという関数を使用できるようにする
export default App;
