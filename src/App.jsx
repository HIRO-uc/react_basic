import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUP = () => {
    setNum(num + 1);
  };
  // 一つめにstateとして使用する変数名、そのstateを変更するための関数名設定
  // useStateの後ろの括弧内は初期値。今回は０
  const [num, setNum] = useState(0);
  return (
    // <React.Fragment>は<>と省略できる
    // reactのなかでjavascriptを記述するためには{}でくくる
    // styleを直接指定するときは　{{}} でくくる。
    // 外側はjavascriptを記述するための括弧。内側はjavascriptのオブジェクトの括弧
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

// 他のファイルでもこのファイルとしてAppという関数を使用できるようにする
export default App;
