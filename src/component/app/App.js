import { useState,} from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ButtonComponent from "../button/ButtonComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const state = useSelector((state)=> state.value )
console.log(state);
  function funCounter(operator) {
    if (operator == "increase")
      return setCounter(counter + 1);
    else return setCounter(counter - 1);
  };

  return (

    <div className="App">
      <h1>hello redux basic</h1>
      <div className="">counter:<span className="counter">{state}</span></div>
      <div className="container">
        <ButtonComponent funCounter={funCounter} >increase</ButtonComponent>
        <ButtonComponent funCounter={funCounter} >decrease</ButtonComponent>
      </div>


    </div>
  );
}

export default App;
