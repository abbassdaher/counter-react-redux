import { useState } from "react";
import ButtonComponent from "../button/ButtonComponent";

function App() {
  const [counter, setCounter] = useState(0);

  function funCounter(operator) {
    if (operator == "increase")
      return setCounter(counter + 1);
    else return setCounter(counter - 1);
  };

  return (

    <div className="App">
      <h1>hello redux basic</h1>
      <div className="">counter:<span className="counter">{counter}</span></div>
      <ButtonComponent funCounter={funCounter} >increase</ButtonComponent>
      <ButtonComponent funCounter={funCounter} >decrease</ButtonComponent>


    </div>
  );
}

export default App;
