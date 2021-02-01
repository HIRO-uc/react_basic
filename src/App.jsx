import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  // 一つめにstateとして使用する変数名、そのstateを変更するための関数名設定
  // useStateの後ろの括弧内は初期値。今回は０
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUP = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useeffectを使って変数を第二引数に渡すとその引数にだけ関心を持つようになる
  // 第二引数にからの配列を渡すと最初の一回だけ処理させることもできる
  useEffect(() => {
    if (num % 3 === 0) {
      // ↓左がfalseの場合、右を返す。この処理によって無限ループを防ぐ。
      faceShowFlag || setFaceShowFlag(true);
    } else {
      // ↓左がtrueの場合、右を返す。この処理によって無限ループを防ぐ。
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </React.Fragment>
  );
};

// 他のファイルでもこのファイルとしてAppという関数を使用できるようにする
export default App;
