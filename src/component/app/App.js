import { Fragment, useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ButtonComponent from "../button/ButtonComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const golobalState = useSelector((state) => state)
  const dispatch = useDispatch()

  const increase = () => {
    const action = { type: 'increase' }
    dispatch(action)
  }
  const decrease = () => {
    const action = { type: 'decrease' }
    dispatch(action)
  }
  const toggleConter = () => {
    dispatch({ type: 'toggleConter' })
  }

  return (

    <div className="App">
      <h1>hello redux basic</h1>
      {golobalState.showCounter && <Fragment>
        <div className="">counter:
          <span className="counter">{golobalState.value}</span>
        </div>
      </Fragment>}

      <div className="container">

        <button onClick={increase} >increase +</button>
        <button onClick={decrease}>decrease -</button>
        <button onClick={toggleConter}>show content</button>

      </div>


    </div>
  );
}

export default App;
