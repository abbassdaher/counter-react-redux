import { useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ButtonComponent from "../button/ButtonComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const state = useSelector((state) => state.value)
  const dispatch = useDispatch()
  
  const increase = () => {
    const action = { type: 'increase' }
    dispatch(action)
  }
  const decrease = () => {
  const action = {type : 'decrease' }
  dispatch(action)
  }


  return (

    <div className="App">
      <h1>hello redux basic</h1>
      <div className="">counter:<span className="counter">{state}</span></div>
      <div className="container">
        
        <button onClick={increase} >increase +</button>
        <button onClick={decrease}>decrease -</button>

      </div>


    </div>
  );
}

export default App;
