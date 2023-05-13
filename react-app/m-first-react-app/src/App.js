import { useState, useEffect } from "react";

function Hello() {
  function effecFn (){
    console.log("I'm here! :)");
  }
  useEffect(() => {
    console.log("I'm here! :)");                // 컴포넌트 발생할때 실행
    return () => console.log("Bye Bye... :(");  // 컴포넌트 사라질때 실행
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "Show"}</button>
    </div>
  );
}

export default App;
